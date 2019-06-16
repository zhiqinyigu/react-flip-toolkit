// currently not being autogenerated because I am struggling with
// rollup + typescript + the "emitDeclarationOnly" tsconfig setting.
// :(

import * as React from 'react'

export interface Spring {
  stiffness?: number
  damping?: number
  overshootClamping?: boolean
}

export type SpringConfig =
  | 'stiff'
  | 'noWobble'
  | 'veryGentle'
  | 'gentle'
  | 'wobbly'
  | Spring

export type ChildAsFunction = (props: object) => React.ReactNode
export type FlippedChildren = React.ReactNode | ChildAsFunction

export interface FlippedProps {
  children: FlippedChildren
  inverseFlipId?: string
  flipId?: string
  opacity?: boolean
  translate?: boolean
  scale?: boolean
  transformOrigin?: string
  stagger?: string | boolean
  /** Provide a string referencing one of the spring presets — (default), veryGentle, gentle, wobbly, or stiff, OR provide an object with stiffness and damping parameters */
  spring?: SpringConfig
  /** Called when the FLIP animation for the element starts. It is provided a reference to the DOM element being transitioned as the first argument. */
  onStart?: (element: HTMLElement) => void
  /** Similar to onStart, but guaranteed to run for all FLIP-ped elements on the initial tick of the FLIP animation, before the next frame has rendered, even if the element in question has a stagger delay. It is provided a reference to the DOM element being transitioned as the first argument.   */
  onStartImmediate?: (element: HTMLElement) => void
  /** Called with the current spring value (normally between 0 - 1 but might briefly go over or under that range depending on the level of "bounciness" of the spring). Useful if you'd like to tween other, non-FLIP animations in concert with a FLIP transition.  */
  onSpringUpdate?: (springValue: number) => void
  /** Called when the FLIP animation completes. It is provided a reference to the DOM element being transitioned as the first argument. (If transitions are interruped by new ones, onComplete will still be called.) */
  onComplete?: (element: HTMLElement) => void
  /** Called when the element first appears in the DOM. It is provided a reference to the DOM element being transitioned as the first argument, and the index of the element relative to all appearing elements as the second. Note: If you provide an onAppear prop, the default opacity of the element will be set to 0 to allow you to animate it in without any initial flicker. If you don't want any opacity animation, just set the element's opacity to 1 immediately in your onAppear function. */
  onAppear?: (element: HTMLElement, index: number) => void
  /** Called when the element is removed from the DOM. It must call the removeElement function when the exit transition has completed.   */
  onExit?: (
    element: HTMLElement,
    index: number,
    removeElement: () => void
  ) => void
  /** A function provided with the current and previous decisionData props passed down by the Flipper component. Returns a boolean to indicate whether a Flipped component should animate at that particular moment or not. */
  shouldFlip?: (prevDecisionData: any, currentDecisionData: any) => boolean
  /** A function provided with the current and previous decisionData props passed down by the Flipper component. Returns a boolean indicating whether to apply inverted transforms to all Flipped children that request it via an inverseFlipId. */
  shouldInvert?: (prevDecisionData: any, currentDecisionData: any) => boolean
}

export const Flipped: React.SFC<FlippedProps>

export interface StaggerConfigValue {
  reverse?: boolean
  speed: number
}

export interface StaggerConfig {
  [key: string]: StaggerConfigValue
}

export interface HandleEnterUpdateDeleteArgs {
  hideEnteringElements: () => void
  animateExitingElements: () => Promise<void>
  animateFlippedElements: () => Promise<void> | void
  animateEnteringElements: () => void
}

export interface FlipperProps {
  flipKey: any
  children: React.ReactNode
  /** Provide a string referencing one of the spring presets — noWobble (default), veryGentle, gentle, wobbly, or stiff, OR provide an object with stiffness and damping parameters.  */
  spring?: SpringConfig
  applyTransformOrigin?: boolean
  /** This experimental prop will pause your animation right at the initial application of FLIP-ped styles. That will allow you to inspect the state of the animation at the very beginning, when it should look similar or identical to the UI before the animation began. */
  debug?: boolean
  element?: string
  className?: string
  /** In general, the Flipper component will only apply transitions to its descendents. This allows multiple Flipper elements to coexist on the same page, but it will prevent animations from working if you use portals. You can provide a unique portalKey prop to Flipper to tell it to scope element selections to the entire document, not just to its children, so that elements in portals can be transitioned. */
  portalKey?: string
  /** Sometimes, you'll want the animated children of Flipper to behave differently depending on the state transition — maybe only certain Flipped elements should animate in response to a particular change. By providing the decisionData prop to the Flipper component, you'll make that data available to the shouldFlip and shouldInvert methods of each child Flipped component, so they can decided for themselves whether to animate or not. */
  decisionData?: any
  /** By default, react-flip-toolkit finishes animating out exiting elements before animating in new elements, with updating elements transforming immediately. You might want to have more control over the sequence of transitions — say, if you wanted to hide elements, pause, update elements, pause again, and finally animate in new elements. Or you might want transitions to happen simultaneously. If so, provide the function handleEnterUpdateDelete as a prop. */
  handleEnterUpdateDelete?: (args: HandleEnterUpdateDeleteArgs) => void
  staggerConfig?: StaggerConfig
  retainTransform?: boolean
  /** This callback prop will be called when all individual FLIP animations have completed. Its single argument is a list of flipIds for the Flipped components that were activated during the animation. If an animation is interrupted, onComplete will be still called right before the in-progress animation is terminated. */
  onComplete?: (flipIds: string[]) => void
}

export const Flipper: React.ComponentType<FlipperProps>

export interface ExitContainerProps {
  children: React.ReactNode
}

export const ExitContainer: React.SFC<ExitContainerProps>
