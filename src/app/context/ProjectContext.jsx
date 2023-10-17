import { createContext } from "react";



const ProjectContext = createContext()

export const ProjectContextProvider = ({ children }) => {
    




  return (
      <ProjectContext.Provider value={{}}>
          {children}
   </ProjectContext.Provider>
  )
}

export default ProjectContext