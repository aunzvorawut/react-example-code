https://cdn-images-1.medium.com/max/1600/0*VoYsN6eq7I_wjVV5.png

componentWillMount is called first, 
followed by render, 
followed by componentDidMount.


//===========================================
There are five updating lifecycle methods:

componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate

Whenever a component instance updates, it automatically calls all five of these methods, in order.

shouldComponentUpdate gets called after componentWillReceiveProps, but still before the rendering begins.

If shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update! None of the remaining lifecycle methods for that updating period will be called, including render.

shouldComponentUpdate automatically receives two arguments: nextProps and nextState. It's typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do

componentWillUpdate gets called in between shouldComponentUpdateand render.

componentDidUpdate gets called after any rendered HTML has finished loading.

componentDidUpdate automatically gets passed two arguments: prevProps and prevState

A component's unmounting period occurs when the component is removedfrom the DOM. This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.

componentWillUnmount is the only unmounting lifecycle method!

componentWillUnmount gets called right before a component is removed from the DOM. If a component initiates any methods that require cleanup, then componentWillUnmount is where you should put that cleanup.
