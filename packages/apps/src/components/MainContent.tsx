interface MainContentProps {
  activeTab: string;
}

export default function MainContent({ activeTab }: MainContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">소개</h2>
            {/* Overview content will go here */}
            <div className="bg-neutral-100 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600">Overview section content</p>
            </div>
          </div>
        );

      case "tokens":
        return (
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Design Tokens
            </h2>
            {/* Design Tokens content will go here */}
            <div className="bg-neutral-100 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600">Design Tokens section content</p>
            </div>
          </div>
        );

      case "component-button":
        return (
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Button Component
            </h2>
            {/* Button component documentation will go here */}
            <div className="bg-neutral-100 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600">Button component documentation</p>
            </div>
          </div>
        );

      case "component-input":
        return (
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Input Component
            </h2>
            {/* Input component documentation will go here */}
            <div className="bg-neutral-100 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600">Input component documentation</p>
            </div>
          </div>
        );

      case "component-card":
        return (
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Card Component
            </h2>
            {/* Card component documentation will go here */}
            <div className="bg-neutral-100 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600">Card component documentation</p>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Welcome
            </h2>
            <div className="bg-neutral-100 p-6 rounded-lg min-h-96">
              <p className="text-neutral-600">
                Select a section from the sidebar
              </p>
            </div>
          </div>
        );
    }
  };

  return <main className="flex-1 p-6">{renderContent()}</main>;
}
