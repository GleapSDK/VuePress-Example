module.exports = {
    head: [['script', {}, `
        (function() {
            if (typeof window.GleapActions === 'undefined') {
                !function(Gleap,e,key){if(window.GleapActions=[],Gleap=window.Gleap=window.Gleap||[],!Gleap.invoked){for(Gleap.invoked=!0,Gleap.methods=['identify','clearIdentity','attachCustomData','setCustomData','removeCustomData','clearCustomData','registerCustomAction','logEvent','sendSilentBugReport','startFeedbackFlow','open','hide','on','setLanguage','setLiveSite','initialize'],Gleap.f=function(e){return function(){var a=Array.prototype.slice.call(arguments);window.GleapActions.push({e,a});};},e=0;e<Gleap.methods.length;e++)key=Gleap.methods[e],Gleap[key]=Gleap.f(key);Gleap.load=function(k){var b='https://gleapcdn.com/latest/';var h=document.getElementsByTagName('head')[0];var n=document.createElement('link');n.onload=function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src=b+'index.js',h.appendChild(t);},n.rel='stylesheet',n.type='text/css',n.href=b+'index.min.css',n.media='all',h.appendChild(n);},Gleap.load(),
                Gleap.initialize('YOUR_API_KEY');
                }}();
            }
        })();
    `]]
}