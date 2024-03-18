import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

export default function LayoutComponent() {
  return (
    <ResizablePanelGroup direction='horizontal' className='w-screen'>
      <ResizablePanel className='max-w-[192px] min-w-[64px]'>
        <div className='h-screen flex items-center justify-center'>
          <span className='font-semibold'>One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={99}>
        <div className='flex h-full items-center justify-center p-6'>
          <span className='font-semibold'>Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
