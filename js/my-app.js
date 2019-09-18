// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/recetas/',
    	url: 'recetas.html',
    	name: 'recetas',
  		},
		
		{
		path: '/mediterranea/',
    	url: 'mediterranea.html',
    	name: 'mediterranea',
  		},
		
		{
		path: '/albondiga/',
    	url: 'albondiga.html',
    	name: 'albondiga',
  		},
		
		{
		path: '/formulario/',
    	url: 'formulario.html',
    	name: 'formulario',
  		}
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

