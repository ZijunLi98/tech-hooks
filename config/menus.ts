export const menus = [
  {
    title: '生命周期',
    children: ['useUnmount', 'useUnmountedRef'],
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
      'usePreviousState',
      'useCookieState',
      'useLocalStorageState',
      'useSessionStorageState',
    ],
  },
  {
    title: 'DOM',
    children: ["useTitle"],
  },
  {
    title: 'Effect',
    children: ['useDebounceFn', 'useThrottleFn', 'useUpdateEffect'],
  },
  {
    title: '进阶',
    children: ['useLatest', 'useMemoizedFn'],
  },
];
