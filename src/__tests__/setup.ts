import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Mock framer-motion so animations don't block test assertions in jsdom
vi.mock("framer-motion", async () => {
  const mock = await import("./__mocks__/framer-motion");
  return {
    ...mock,
    __esModule: true,
  };
});
