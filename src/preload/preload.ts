import { contextBridge, ipcRenderer } from 'electron';
import { User, StudySession, Note, Resource } from '../../db/models';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  'api', {
    // Database operations
    db: {
      // User operations
      createUser: (userData: any) => ipcRenderer.invoke('db:createUser', userData),
      getUser: (id: string) => ipcRenderer.invoke('db:getUser', id),
      updateUser: (id: string, data: any) => ipcRenderer.invoke('db:updateUser', id, data),
      
      // Study session operations
      createSession: (sessionData: any) => ipcRenderer.invoke('db:createSession', sessionData),
      getSessions: (userId: string) => ipcRenderer.invoke('db:getSessions', userId),
      updateSession: (id: string, data: any) => ipcRenderer.invoke('db:updateSession', id, data),
      
      // Note operations
      createNote: (noteData: any) => ipcRenderer.invoke('db:createNote', noteData),
      getNotes: (userId: string) => ipcRenderer.invoke('db:getNotes', userId),
      updateNote: (id: string, data: any) => ipcRenderer.invoke('db:updateNote', id, data),
      
      // Resource operations
      createResource: (resourceData: any) => ipcRenderer.invoke('db:createResource', resourceData),
      getResources: (userId: string) => ipcRenderer.invoke('db:getResources', userId),
      updateResource: (id: string, data: any) => ipcRenderer.invoke('db:updateResource', id, data),
    },
    
    // Window operations
    window: {
      minimize: () => ipcRenderer.send('window:minimize'),
      maximize: () => ipcRenderer.send('window:maximize'),
      close: () => ipcRenderer.send('window:close'),
    },
    
    // System operations
    system: {
      getPlatform: () => ipcRenderer.invoke('system:getPlatform'),
      getVersion: () => ipcRenderer.invoke('system:getVersion'),
    }
  }
); 