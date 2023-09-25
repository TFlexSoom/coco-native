/*
 * Router for custom ReactNavigation navigation
 */

import {
    NavigationState,
    Route,
    Router,
    BaseRouter,
    CommonNavigationAction,
    RouterConfigOptions,
    PartialState,
} from "@react-navigation/native";

function shortid(): string {
    return "CocoRouter"
}

const cocoRouter: Router<NavigationState, CommonNavigationAction> = {
    type: 'coco',

    getInitialState({ routeNames, routeParamList }: RouterConfigOptions) {
        // TODO
        const index = 0;

        return {
            stale: false,
            type: 'coco',
            key: shortid(),
            index,
            routeNames,
            routes: routeNames.map(name => ({
                name,
                key: name,
                params: routeParamList[name],
            })),
        };
    },

    getRehydratedState(partialState: PartialState<NavigationState>, { routeNames, routeParamList }: RouterConfigOptions) {
        const state = partialState;
        const routes = state.routes
            .filter(route => routeNames.includes(route.name))
            .map(
                route =>
                ({
                    ...route,
                    key: route.key || `${route.name}-${shortid()}`,
                    params:
                        routeParamList[route.name] !== undefined
                            ? {
                                ...routeParamList[route.name],
                                ...route.params,
                            }
                            : route.params,
                } as Route<string>)
            );

        return {
            stale: false,
            type: 'drawer',
            key: shortid(),
            index:
                typeof state.index === 'number' && state.index < routes.length
                    ? state.index
                    : 0,
            routeNames,
            routes,
        };
    },

    getStateForRouteNamesChange(state, { routeNames }) {
        const routes = state.routes.filter(route =>
            routeNames.includes(route.name)
        );

        return {
            ...state,
            routeNames,
            routes,
            index: Math.min(state.index, routes.length - 1),
        };
    },

    getStateForRouteFocus(state, key) {
        const index = state.routes.findIndex(r => r.key === key);

        if (index === -1 || index === state.index) {
            return state;
        }

        return { ...state, index };
    },

    getStateForAction(state: NavigationState, action: CommonNavigationAction) {
        switch (action.type) {
            case 'NAVIGATE': {
                const index = state.routes.findIndex(
                    route => route.name === action?.payload?.name
                );

                if (index === -1) {
                    return null;
                }

                return { ...state, index };
            }

            default:
                return BaseRouter.getStateForAction(state, action);
        }
    },

    shouldActionChangeFocus() {
        return false;
    },
};

const CocoRouter = () => cocoRouter;

export default CocoRouter;