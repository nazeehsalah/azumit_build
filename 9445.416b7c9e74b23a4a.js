"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9445],{9445:(x,a,s)=>{s.r(a),s.d(a,{SubscriptionsModule:()=>Z});var c=s(6895),p=s(7504),t=s(6353),u=s(2340),l=s(6526);let f=(()=>{class n{constructor(o,i){this.global=o,this.auth=i,this.fundApi=`${u.N.callMethod}${u.N.modules.fund}`}get(){return this.global.post(`${this.fundApi}get_my_subs`,{paramlist:{data:this.auth.currentUserValue.id}})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(l.Uh),t.LFG(l.$h))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var r=s(1558),b=s(1774),h=s(6899),v=s(8490);function S(n,e){if(1&n&&(t.TgZ(0,"section",3)(1,"h5",4),t._uU(2),t.ALo(3,"translate"),t.qZA(),t._UZ(4,"div",5)(5,"app-info",6),t.ALo(6,"translate"),t.ALo(7,"currency"),t._UZ(8,"app-info",6),t.ALo(9,"translate"),t.ALo(10,"currency"),t._UZ(11,"app-info",6),t.ALo(12,"translate"),t.ALo(13,"currency"),t._UZ(14,"app-info",6),t.ALo(15,"translate"),t.ALo(16,"currency"),t._UZ(17,"app-info",6),t.ALo(18,"translate"),t.ALo(19,"currency"),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,11,"Subscription information")),t.xp6(3),t.Q6J("title",t.lcZ(6,13,"Employee share"))("value",t.xi3(7,15,o.subscriptions.empSubs,"EGP")),t.xp6(3),t.Q6J("title",t.lcZ(9,18,"Company Share"))("value",t.xi3(10,20,o.subscriptions.compSubs,"EGP")),t.xp6(3),t.Q6J("title",t.lcZ(12,23,"Employee Boosters"))("value",t.xi3(13,25,o.subscriptions.emp_boosters,"EGP")),t.xp6(3),t.Q6J("title",t.lcZ(15,28,"Company Boosters"))("value",t.xi3(16,30,o.subscriptions.comp_boosters,"EGP")),t.xp6(3),t.Q6J("title",t.lcZ(18,33,"Total Subscriptions"))("value",t.xi3(19,35,o.subscriptions.units,"EGP"))}}let m=(()=>{class n{constructor(o){this.subService=o}ngOnInit(){this.subService.get().subscribe(o=>{this.subscriptions=o.data})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list"]],decls:3,vars:3,consts:[[3,"title","backUrl"],[1,"page-container-bg"],["class","page-container",4,"ngIf"],[1,"page-container"],[1,"mb-0"],[1,"mb-3","hr"],[3,"title","value"]],template:function(o,i){1&o&&(t._UZ(0,"app-back-header",0),t.TgZ(1,"ion-content",1),t.YNc(2,S,20,38,"section",2),t.qZA()),2&o&&(t.Q6J("title","Subscriptions")("backUrl","/user"),t.xp6(2),t.Q6J("ngIf",i.subscriptions))},dependencies:[c.O5,r.W2,b.q,h.O,c.H9,v.X$]}),n})();const g=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-subscriptions"]],decls:1,vars:0,template:function(o,i){1&o&&t._UZ(0,"ion-router-outlet")},dependencies:[r.jP]}),n})(),children:[{path:"",component:m,pathMatch:"full"}]}];let y=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(g),p.Bz]}),n})();var A=s(2234),L=s(5247);let Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,y,r.Pc,L.m,A.m]}),n})()}}]);