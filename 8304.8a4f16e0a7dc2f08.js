"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8304],{8304:(M,r,a)=>{a.r(r),a.d(r,{EvaluationModule:()=>U});var l=a(6895),u=a(7504),t=a(6353),s=a(2340),p=a(6526);let m=(()=>{class n{constructor(o,i){this.global=o,this.auth=i,this.fundApi=`${s.N.callMethod}${s.N.modules.fund}`}get(){return this.global.post(`${this.fundApi}get_my_evaluate`,{paramlist:{data:this.auth.currentUserValue.id}})}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(p.Uh),t.LFG(p.$h))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var c=a(1558),f=a(1774),g=a(6899),h=a(8490);function Z(n,e){1&n&&t._UZ(0,"ion-icon",14)}function y(n,e){1&n&&t._UZ(0,"ion-icon",15)}function L(n,e){if(1&n&&(t.TgZ(0,"div",16)(1,"div",6)(2,"div",17),t._UZ(3,"app-info",5),t.ALo(4,"translate"),t.ALo(5,"number"),t.qZA(),t.TgZ(6,"div",17),t._UZ(7,"app-info",5),t.ALo(8,"translate"),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"div",17),t._UZ(11,"app-info",5),t.ALo(12,"translate"),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"div",17),t._UZ(15,"app-info",5),t.ALo(16,"translate"),t.ALo(17,"currency"),t.qZA(),t.TgZ(18,"div",17),t._UZ(19,"app-info",5),t.ALo(20,"translate"),t.ALo(21,"currency"),t.qZA(),t.TgZ(22,"div",17),t._UZ(23,"app-info",5),t.ALo(24,"translate"),t.ALo(25,"currency"),t.qZA()()()),2&n){const o=t.oxw().$implicit;t.xp6(3),t.Q6J("title",t.lcZ(4,12,"Employee Units"))("value",t.lcZ(5,14,o.own_units)),t.xp6(4),t.Q6J("title",t.lcZ(8,16,"Company Units"))("value",t.lcZ(9,18,o.company_units)),t.xp6(4),t.Q6J("title",t.lcZ(12,20,"Total Units"))("value",t.lcZ(13,22,o.total_units)),t.xp6(4),t.Q6J("title",t.lcZ(16,24,"Today Employee Value"))("value",t.xi3(17,26,o.today_own_units_value,"EGP")),t.xp6(4),t.Q6J("title",t.lcZ(20,29,"Today Company Value"))("value",t.xi3(21,31,o.today_company_units_value,"EGP")),t.xp6(4),t.Q6J("title",t.lcZ(24,34,"Today Total Value"))("value",t.xi3(25,36,o.total_value_today,"EGP"))}}function x(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9),t.NdJ("click",function(){const _=t.CHM(o).$implicit,J=t.oxw();return t.KtG(J.toggle(_))}),t.YNc(4,Z,1,0,"ion-icon",10),t.YNc(5,y,1,0,"ion-icon",11),t.TgZ(6,"h5",12),t._uU(7),t.qZA()(),t.YNc(8,L,26,39,"div",13),t.qZA()()()}if(2&n){const o=e.$implicit;t.xp6(4),t.Q6J("ngIf",!o.open),t.xp6(1),t.Q6J("ngIf",o.open),t.xp6(2),t.Oqu(o.name),t.xp6(1),t.Q6J("ngIf",o.open)}}let v=(()=>{class n{constructor(o){this.evalService=o,this.evaluationList=[],this.total=0}ngOnInit(){this.evalService.get().subscribe(o=>{this.evaluationList=o.data,this.getTotal()})}getTotal(){this.evaluationList.forEach(o=>this.total+=o.total_value_today)}toggle(o){o.open=!o.open}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(m))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list"]],decls:8,vars:10,consts:[[3,"title","backUrl"],[1,"page-container-bg"],[1,"page-container"],["class","row",4,"ngFor","ngForOf"],[1,"mt-3"],[3,"title","value"],[1,"row"],[1,"col-12","mb-2"],[1,"product"],[1,"title","d-flex","gap-3","justify-content-start","align-items-center",3,"click"],["name","chevron-down-outline",4,"ngIf"],["name","chevron-up-outline",4,"ngIf"],[1,"mb-0","main-color","cairo-bold"],["class","eval-content",4,"ngIf"],["name","chevron-down-outline"],["name","chevron-up-outline"],[1,"eval-content"],[1,"col-12","col-md-6"]],template:function(o,i){1&o&&(t._UZ(0,"app-back-header",0),t.TgZ(1,"ion-content",1)(2,"section",2),t.YNc(3,x,9,4,"div",3),t.TgZ(4,"div",4),t._UZ(5,"app-info",5),t.ALo(6,"translate"),t.ALo(7,"currency"),t.qZA()()()),2&o&&(t.Q6J("title","Evaluation")("backUrl","/user"),t.xp6(3),t.Q6J("ngForOf",i.evaluationList),t.xp6(2),t.Q6J("title",t.lcZ(6,5,"Total"))("value",t.xi3(7,7,i.total,"EGP")))},dependencies:[l.sg,l.O5,c.W2,c.gu,f.q,g.O,l.JJ,l.H9,h.X$],styles:[".product[_ngcontent-%COMP%]{background:#fff;padding:.5rem;border-radius:10px;border:1px solid var(--ion-color-primary)}.product[_ngcontent-%COMP%]   .eval-content[_ngcontent-%COMP%]{background:#f4f6fa;margin-top:1rem;border-radius:5px;padding:.5rem}.product[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:2rem;height:2rem;font-size:2rem}"]}),n})();const A=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-evaluation"]],decls:1,vars:0,template:function(o,i){1&o&&t._UZ(0,"ion-router-outlet")},dependencies:[c.jP]}),n})(),children:[{path:"",component:v,pathMatch:"full"}]}];let C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(A),u.Bz]}),n})();var T=a(2234),E=a(5247);let U=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,C,c.Pc,T.m,E.m]}),n})()}}]);