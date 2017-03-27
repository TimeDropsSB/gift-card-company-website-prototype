/**
 * dispatchAction()
 * Invokes an action creator to dispatch an action.
 * @param {func}: The action to perform.
 * @param {obj}: The event target (input element) itself.
 */
export default function dispatchAction(action, evt) {
    if (typeof action === "function") {
        action(evt.target.value, evt.target.name);
    }
}
