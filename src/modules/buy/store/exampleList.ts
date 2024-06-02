import { create } from 'zustand'
import { type ExampleStoreState } from '../types/example.type'

const useStoreExample = create<ExampleStoreState>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

export default useStoreExample
