import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const BuildTest = () => {
  return (
    <div className="p-6 rounded-lg border border-neutral-200 bg-white text-neutral-900">
      Storybook build test
    </div>
  );
};

const meta: Meta<typeof BuildTest> = {
  title: "Meta/Build Test",
  component: BuildTest,
};

export default meta;

type Story = StoryObj<typeof BuildTest>;

export const Default: Story = {};
