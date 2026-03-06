import React from "react";

// Mock motion components — render as plain HTML elements
const motionHandler = {
  get(_target: unknown, prop: string) {
    // Return a forwardRef component that renders the HTML element
    return React.forwardRef(function MotionMock(
      props: Record<string, unknown>,
      ref: React.Ref<HTMLElement>
    ) {
      // Strip framer-motion-specific props
      const {
        initial: _initial,
        animate: _animate,
        exit: _exit,
        transition: _transition,
        variants: _variants,
        whileHover: _whileHover,
        whileTap: _whileTap,
        whileFocus: _whileFocus,
        whileDrag: _whileDrag,
        whileInView: _whileInView,
        drag: _drag,
        dragConstraints: _dragConstraints,
        layout: _layout,
        layoutId: _layoutId,
        ...domProps
      } = props;

      return React.createElement(prop, { ...domProps, ref });
    });
  },
};

export const motion = new Proxy({}, motionHandler);

// AnimatePresence just renders children directly
export function AnimatePresence({
  children,
}: {
  children: React.ReactNode;
  mode?: string;
  initial?: boolean;
  onExitComplete?: () => void;
}) {
  return <>{children}</>;
}
