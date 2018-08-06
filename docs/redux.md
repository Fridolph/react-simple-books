redux 工作流程

Store -> React Component (Action creators) dispatch -> (previousState, action) Reducers (newState) -> Store -> React Component

---

三大原则：

* store是唯一的
* 只有store能改变自己的内容
* Reducer必须是纯函数

核心api

createStore
store.dispatch()
store.getState()
store.subscribe()
