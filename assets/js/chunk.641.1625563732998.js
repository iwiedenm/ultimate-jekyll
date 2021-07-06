(self.webpackChunkultimate_jekyll=self.webpackChunkultimate_jekyll||[]).push([[641],{641:function(t){var n,a;function r(){var e=this;e.properties={},n=e.Manager.dom(),a=e.Manager.utilities(),e.accountPageInitialized=!1,new URL(window.location.href).pathname.includes("account")&&e.initializeAccountPage()}function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function o(e,t,r,o){r=r||{};var s=(o=o||{}).defaultPlanId||"basic";r.plan=r.plan||{},r.plan.id=r.plan.id||s,r.plan.expires=r.plan.expires||{},r.plan.expires.timestamp=new Date(r.plan.expires.timestamp||0).toISOString(),r.plan.expires.timestampUNIX=Math.round(new Date(r.plan.expires.timestamp||0).getTime()/1e3),r.plan.devices=r.plan.devices||1,r.plan.payment=r.plan.payment||{},r.plan.payment.startDate=r.plan.payment.startDate||{},r.plan.payment.startDate.timestamp=r.plan.payment.startDate.timestamp||"1999-01-01T00:00:00Z",r.plan.payment.frequency=r.plan.payment.frequency||"unknown",r.plan.payment.orderId=r.plan.payment.orderId||"unknown",r.plan.payment.resourceId=r.plan.payment.resourceId||"unknown";var l=new Date(r.plan.expires.timestamp),u=new Date,p=Math.floor((l-u)/864e5);let c=(l.getTime()-u.getTime())/864e5;var d,m,h=new Date(r.plan.payment.startDate.timestamp),f="development"===a.get(e.Manager,"properties.meta.environment","")?"http://localhost:4001/cancel/":"https://itwcreativeworks.com/cancel/",b=n.select(".auth-billing-subscribe-btn"),g=n.select(".auth-billing-update-btn"),y=n.select(".auth-billing-plan-id-element"),v=n.select(".auth-billing-frequency-element"),w=n.select(".auth-billing-start-date-element"),I=n.select(".auth-billing-expiration-date-element"),P=new URL(f),k=new URL(window.location.href);return b.setAttribute("hidden",!0),g.setAttribute("hidden",!0),c>-1&&r.plan.id!==s?(r.plan.id=r.plan.id,P.searchParams.set("appName",a.get(e.Manager,"properties.global.brand.name","Unknown")),P.searchParams.set("supportUrl",k.origin+"/support"),P.searchParams.set("supportEmail",a.get(e.Manager,"properties.contact.emailSupport","unknown@email.com")),P.searchParams.set("userEmail",t.email),P.searchParams.set("userId",t.uid),P.searchParams.set("orderId",r.plan.payment.orderId),P.searchParams.set("resourceId",r.plan.payment.resourceId),g.removeAttribute("hidden").setAttribute("href",P.toString())):(r.plan.id=s,b.removeAttribute("hidden")),y.setInnerHTML(i(r.plan.id)),v.setInnerHTML(r.plan.id!==s?" (billed "+i(r.plan.payment.frequency)+")":""),w.setInnerHTML(r.plan.id!==s?" - Purchased "+(["January","February","March","April","May","June","July","August","September","October","November","December"][h.getMonth()]+" ")+h.getDate()+", "+h.getFullYear():""),I.setInnerHTML(r.plan.id!==s&&p<366?'<i class="fas fa-exclamation-triangle mr-1"></i> Expires in '+p+" days ":""),r.oauth2=r.oauth2||{},r.oauth2.discord=r.oauth2.discord||{},r.oauth2.discord.user=r.oauth2.discord.user||{},r.roles=r.roles||{},r.roles.betaTester=r.plan.id!==s&&(!0===r.roles.betaTester||"true"===r.roles.betaTester),r.roles.developer=!0===r.roles.developer||"true"===r.roles.developer,r.roles.admin=!0===r.roles.admin||"true"===r.roles.admin,r.roles.vip=!0===r.roles.vip||"true"===r.roles.vip,r.roles.promoExempt=!0===r.roles.promoExempt||"true"===r.roles.promoExempt,e.properties=r,d=".auth-apikey-element",m=a.get(r,"api.privateKey","n/a"),n.select(d).each((function(e,t){"INPUT"===e.tagName?n.select(e).setValue(m):n.select(e).setInnerHTML(m)})),e.properties}r.prototype.initializeAccountPage=function(e){var t=this;t.accountPageInitialized||(document.addEventListener("click",(function(e){e.target.matches(".auth-delete-account-btn")&&t.delete().catch((function(e){}))}),!1),t.accountPageInitialized=!0)},r.prototype.delete=function(t){var r=this,i=firebase.auth().currentUser,o=n.select(".auth-delete-account-error-message-element"),s=n.select(".auth-delete-account-confirmation-input").getValue(),l=n.select(".auth-delete-account-btn");return l.setAttribute("disabled",!0).addClass("disabled"),o.setAttribute("hidden",!0),new Promise((function(t,n){function u(e){var t=new Error(e);return o.removeAttribute("hidden").setInnerHTML(t),l.removeAttribute("disabled").removeClass("disabled"),n(t)}return s?i?void i.getIdToken(!1).then((function(e){fetch("https://us-central1-"+a.get(r.Manager,"properties.options.libraries.firebase_app.config.projectId","unknown")+".cloudfunctions.net/bm_api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({authenticationToken:e,command:"delete-user",payload:{}})}).then((function(e){if(!e.ok)return e.text().then((function(t){throw new Error(t||e.statusText||"Unknown error.")}));e.json().then((function(e){return console.log("Successfully deleted account",e),r.Manager.auth().signOut(),t(e)}))})).catch((function(e){return u(e)}))})).catch((function(){return u(e)})):u("Please log in first."):u("Please confirm that you wish to have your account deleted.")}))},r.prototype.resolve=function(e,t){var n=this;return new Promise((function(a,r){var i=firebase.auth().currentUser;return e&&e.auth?i?a(o(n,i,e,t)):r(new Error("No currently authenticated user")):i?void firebase.firestore().doc("users/"+i.uid).get().then((function(e){return a(o(n,i,e.data(),t))})).catch(r):r(new Error("Malformed <account> input and no currently authenticated user"))}))},t.exports=r}}]);