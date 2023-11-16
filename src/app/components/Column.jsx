import React, { useContext, useMemo, useState, useRef } from "react";
import { ProjectContext, UserPreferencesContext } from "../context";
import Card from "./Card";
import { SortableContext } from "@dnd-kit/sortable";
import { DndContext, DragOverlay, closestCenter } from "@dnd-kit/core";

import { createPortal } from "react-dom";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

const MemoizedColumn = React.memo(
	({ icon: IconComponent, statusName, color, projects, columnId }) => {
		const { userPreferences } = useContext(UserPreferencesContext);
		const { columnsId, columns } = useContext(ProjectContext);

		const boardContainerRef = useRef(null);

		const [activeProject, setActiveProject] = useState(null);

		const projectsIds = useMemo(() => {
			return projects.map((pro) => pro.id);
		}, [projects]);

		function onDragStart(event) {
			if (event.active.data.current) {
				setActiveProject(event.active.data.current);
			}
		}

		function onDragEnd(event) {
			const { active, over } = event;
			if (!over) return;

			const activeProjectId = active.id;
			const overProjectId = over.id;
			if (activeProjectId === overProjectId) return;
		}

		function onDragOver(event) {
			const { active, over } = event;
			if (!over) return;

			const activeProjectId = active.id;
			const overProjectId = over.id;
			if (activeProjectId === overProjectId) return;
		}

		return (
			<div
				ref={boardContainerRef}
				style={{
					color: userPreferences.shade.text.primaryText,
					fontFamily: userPreferences.font.fontFamily,
					backgroundColor: userPreferences.shade.card,
				}}
				className={`${userPreferences.border} w-[300px] lg:w-[350px] pb-5 flex-shrink-0 overflow-hidden`}
			>
				<div className='flex items-center justify-between mb-5  '>
					<div
						style={{ backgroundColor: `${color}` }}
						className='h-[52px] w-full px-4  flex justify-between items-center '
					>
						<div className='flex items-center gap-1 text-white'>
							<span>
								<IconComponent className='w-[13px] h-[13px] mr-1' />
							</span>
							<span className='text-lg capitalize'>{statusName}</span>{" "}
						</div>

						<div
							className='text-[13px] rounded-full flex justify-center items-center w-7 h-7'
							style={{
								color: userPreferences.shade.text.secondaryText,
								backgroundColor: userPreferences.shade.other,
							}}
						>
							<span>{projects ? projects.length : "0"}</span>
						</div>
					</div>
				</div>

				<DndContext
					onDragStart={onDragStart}
					onDragEnd={onDragEnd}
					onDragOver={onDragOver}
					modifiers={[restrictToWindowEdges]}
				>
					<div className='flex flex-col gap-4 h-screen pl-3 pr-2 overflow-y-scroll overflow-x-hidden scroll '>
						<SortableContext items={projectsIds}>
							{projects?.map((project) => (
								<Card key={project.id} project={project} columnId={columnId} />
							))}
						</SortableContext>
						<DragOverlay>
							{activeProject && <Card project={activeProject} />}
						</DragOverlay>
						,
					</div>
				</DndContext>
			</div>
		);
	}
);

MemoizedColumn.displayName = "Column";

export default MemoizedColumn;
