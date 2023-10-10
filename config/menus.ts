export const menus = [
  {
    title: '生命周期',
    children: ['useMount', 'useUnmount', 'useUnmountedRef'],
  },
  {
    title: 'useRequest',
    children: [
      'useRequest/doc/index',
      'useRequest/doc/basic',
    ],
  },
  {
    title: '状态',
    children: [
      'useToggle',
      'useBoolean',
      'useDebounce',
      'useThrottle',
      'useSet',
      'useMap',
      'useGetState',
      'useSetState',
      'useResetState',
      'useSafeState',
      'useRafState',
      'usePreviousState',
      'useCookieState',
      'useLocalStorageState',
      'useSessionStorageState',
    ],
  },
  {
    title: 'Effect',
    children: [
      'useDebounceFn',
      'useThrottleFn',
      'useTimeout',
      'useUpdate',
      'useUpdateEffect',
      'useUpdateLayoutEffect',
    ],
  },
  {
    title: 'DOM',
    children: [
      'useClickAway',
      'useDrop',
      'useHover',
      'useScroll',
      'useKeyPress',
      'useLongPress',
      'useFullscreen',
      'useTitle',
      'useMouse',
      'useSize',
      'useResponsive',
      'useEventTarget',
      'useEventListener',
      'useMutationObserver',
      'useInViewport',
      'useDocumentVisibility',
    ],
  },
  {
    title: '进阶',
    children: ['useLatest', 'useMemoizedFn', 'useCreation'],
  },
];
