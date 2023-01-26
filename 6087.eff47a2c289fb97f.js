"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6087],{6087:(b,m,s)=>{s.r(m),s.d(m,{UserModule:()=>a});var u=s(776),o=s(1558),l=s(6895),c=s(4006),p=s(2234),d=s(7504),t=s(6353),v=s(8490);let f=(()=>{class e{constructor(i){this.modal=i}ngOnInit(){}confirm(){this.modal.dismiss({date:this.date})}close(){this.modal.dismiss()}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(o.IN))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-new-surrender"]],decls:16,vars:11,consts:[[1,"content-dialog"],[1,"page-container","page-container-bg"],[1,"d-flex","justify-content-end"],[1,"close-icon",3,"click"],["name","close-outline"],[1,"mb-0"],[1,"mb-3","hr"],[1,"d-flex","flex-column","justify-content-center","mt-5"],[1,"form-group","mb-4"],["type","date",1,"form-control","input-lg",3,"placeholder","ngModel","ngModelChange"],[1,"btn","btn-primary","btn-block","w-100","btn-lg","border-radius-16","main-color-bg","main-btn",3,"disabled","click"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.NdJ("click",function(){return r.close()}),t._UZ(4,"ion-icon",4),t.qZA()(),t.TgZ(5,"h5",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"div",6),t.TgZ(9,"div",7)(10,"div",8)(11,"input",9),t.NdJ("ngModelChange",function(g){return r.date=g}),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"button",10),t.NdJ("click",function(){return r.confirm()}),t._uU(14),t.ALo(15,"translate"),t.qZA()()()()),2&i&&(t.xp6(6),t.Oqu(t.lcZ(7,5,"Surrender")),t.xp6(5),t.s9C("placeholder",t.lcZ(12,7,"Date of Surrender")),t.Q6J("ngModel",r.date),t.xp6(2),t.Q6J("disabled",!r.date),t.xp6(1),t.hij(" ",t.lcZ(15,9,"Confirm")," "))},dependencies:[o.gu,c.Fj,c.JJ,c.On,v.X$],styles:[".form-group[_ngcontent-%COMP%]{border:1px solid;overflow:hidden;border-radius:10px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-radius:0!important}.close-icon[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;display:flex;justify-content:center;background:var(--ion-color-primary);align-items:center;border-radius:50%}.close-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:2rem;height:2rem;color:#fff}"]}),e})();var P=s(5861);const E=[{action:"/user/subscriptions",icon:"cash",title:"Subscriptions",customAction:!1},{action:"/user/evaluation",icon:"logo-usd",title:"Evaluation",customAction:!1},{action:"/user/performance",icon:"trending-up",title:"Performance",customAction:!1},{action:"/user/loans",icon:"cash",title:"Loans",customAction:!1},{action:"/user/surrender",icon:"hand-right-outline",title:"Surrender",customAction:!0},{action:"/user/products",icon:"podium",title:"Products",customAction:!1},{action:"/user/notifications",icon:"newspaper-outline",title:"Notifications",customAction:!1},{action:"/user/settings",icon:"cog-outline",title:"Settings",customAction:!1}];var S=s(6526),A=s(6090),L=s(8284);function T(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",17)(1,"app-action-card",18),t.NdJ("doClick",function(h){t.CHM(i);const g=t.oxw();return t.KtG(g.doAction(h))}),t.qZA()()}if(2&e){const i=n.$implicit;t.xp6(1),t.Q6J("card",i)}}let y=(()=>{class e{constructor(i,r,h,g){this.auth=i,this.modalCtrl=r,this.router=h,this.document=g,this.cards=E}ngOnInit(){this.auth.userProfile.subscribe(i=>{this.username=i?.name})}doAction(i){var r=this;return(0,P.Z)(function*(){if("Surrender"===i.title){const h=yield r.modalCtrl.create({component:f,cssClass:"select-dialog",showBackdrop:!0,mode:"ios"});h.present(),h.onDidDismiss().then(g=>{g.data&&g.data.date&&r.router.navigateRoot(`/user/surrender/${g.data.date}`)})}})()}openExternal(){this.document.location.href="https://azimut.eg/"}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(S.$h),t.Y36(o.IN),t.Y36(o.SH),t.Y36(l.K0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:30,vars:22,consts:[[1,"page-container","page-container-bg"],[1,"header","mb-3","d-flex","justify-content-between","align-items-start"],[1,"welcome-massage"],[1,"m-0"],[1,"d-block","gray1-color","cairo-bold"],[1,"d-block","cairo-bold","font20","main-color"],[1,"hero"],[1,"products-hero"],[1,"content","p-3"],[1,"mb-0","cairo-bold","main-color"],[1,"mb-0","cairo-semi-bold","mt-3","font12","gray1-color"],[1,"btn","btn-primary","border-radius-10","mt-3","main-color-bg","main-btn",3,"click"],[1,"actions","mt-4"],[1,"mb-0"],[1,"mb-3","hr"],[1,"row"],["class","col-6 mb-3",4,"ngFor","ngForOf"],[1,"col-6","mb-3"],[3,"card","doClick"]],template:function(i,r){1&i&&(t.TgZ(0,"main",0)(1,"section",1)(2,"div",2)(3,"p",3)(4,"span",4),t._uU(5),t.ALo(6,"translate"),t.ALo(7,"falsePipe"),t.qZA(),t.TgZ(8,"span",5),t._uU(9),t.ALo(10,"translate"),t.qZA()()()(),t.TgZ(11,"section",6)(12,"div",7)(13,"div",8)(14,"h4",9),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"p",10),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"button",11),t.NdJ("click",function(){return r.openExternal()}),t._uU(21),t.ALo(22,"translate"),t.qZA()()()(),t.TgZ(23,"section",12)(24,"h5",13),t._uU(25),t.ALo(26,"translate"),t.qZA(),t._UZ(27,"div",14),t.TgZ(28,"div",15),t.YNc(29,T,2,1,"div",16),t.qZA()()()),2&i&&(t.xp6(5),t.AsE("",t.lcZ(6,8,"Hey")," ",t.lcZ(7,10,r.username),""),t.xp6(4),t.Oqu(t.lcZ(10,12,"Hello")),t.xp6(6),t.Oqu(t.lcZ(16,14,"Start now")),t.xp6(3),t.hij(" ",t.lcZ(19,16,"With Azumit Discover our top product that save money for all of your family")," "),t.xp6(3),t.hij(" ",t.lcZ(22,18,"Our products")," "),t.xp6(4),t.Oqu(t.lcZ(26,20,"Our Feature")),t.xp6(4),t.Q6J("ngForOf",r.cards))},dependencies:[l.sg,A.o,L._,v.X$],styles:[".hero[_ngcontent-%COMP%]{background:#fff}.products-hero[_ngcontent-%COMP%]{border-radius:10px;background:#fff;border:1px solid #042b4c;background:url(money.fdd373df4576a07d.png);background-position:right;background-size:120px 120px;background-repeat:no-repeat;box-shadow:0 5px 10px #042b4c4d}.products-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{max-width:calc(100% - 120px)}.products-hero[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{height:40px!important;border-radius:5px!important}"]}),e})();const O=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user"]],decls:1,vars:0,template:function(i,r){1&i&&t._UZ(0,"ion-router-outlet")},dependencies:[o.jP]}),e})(),children:[{path:"",component:y,pathMatch:"full"},{path:"evaluation",loadChildren:()=>s.e(8304).then(s.bind(s,8304)).then(e=>e.EvaluationModule)},{path:"loans",loadChildren:()=>s.e(3624).then(s.bind(s,3624)).then(e=>e.LoansModule)},{path:"performance",loadChildren:()=>s.e(4461).then(s.bind(s,4461)).then(e=>e.PerformanceModule)},{path:"products",loadChildren:()=>s.e(7649).then(s.bind(s,7649)).then(e=>e.ProductsModule)},{path:"notifications",loadChildren:()=>s.e(3373).then(s.bind(s,3373)).then(e=>e.ReportsModule)},{path:"settings",loadChildren:()=>s.e(6112).then(s.bind(s,6112)).then(e=>e.SettingsModule)},{path:"subscriptions",loadChildren:()=>s.e(9445).then(s.bind(s,9445)).then(e=>e.SubscriptionsModule)},{path:"surrender",loadChildren:()=>s.e(4222).then(s.bind(s,4222)).then(e=>e.SurrenderModule)}]}];let x=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(O),d.Bz]}),e})();var z=s(5247);let a=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,o.Pc,x,c.UX,c.u5,p.m,z.m,u.m]}),e})()},776:(b,m,s)=>{s.d(m,{m:()=>d}),s(8124);var o=s(6895),l=s(8548),c=s(6353);let d=(()=>{class t{}return t.\u0275fac=function(f){return new(f||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[o.ez,l.Ns.forRoot({echarts:()=>s.e(8045).then(s.bind(s,8045))})]}),t})()},8124:(b,m,s)=>{s.d(m,{D:()=>l});var u=s(6353),o=s(8548);let l=(()=>{class c{constructor(){this.isSmooth=!1,this.chartOption={}}ngOnInit(){this.chartModel&&(this.chartOption={xAxis:{type:"category",data:this.chartModel.xAxisDate},yAxis:{},series:[{data:this.chartModel.chartDate,type:this.chartModel.chartType,showBackground:!0,backgroundStyle:{color:this.chartModel.backgroundColor},smooth:this.isSmooth}]})}}return c.\u0275fac=function(d){return new(d||c)},c.\u0275cmp=u.Xpm({type:c,selectors:[["app-main-chart"]],inputs:{chartModel:"chartModel",isSmooth:"isSmooth"},decls:1,vars:1,consts:[["echarts","",3,"options"]],template:function(d,t){1&d&&u._UZ(0,"div",0),2&d&&u.Q6J("options",t.chartOption)},dependencies:[o._w]}),c})()},8548:(b,m,s)=>{s.d(m,{_w:()=>x,Ns:()=>z});var u=s(5861),o=s(6353),l=s(1086),c=s(8896),p=s(8929),d=s(353),t=s(6498),v=s(3489);const f={leading:!0,trailing:!1};class L{constructor(e,n,i,r){this.duration=e,this.scheduler=n,this.leading=i,this.trailing=r}call(e,n){return n.subscribe(new T(e,this.duration,this.scheduler,this.leading,this.trailing))}}class T extends v.L{constructor(e,n,i,r,h){super(e),this.duration=n,this.scheduler=i,this.leading=r,this.trailing=h,this._hasTrailingValue=!1,this._trailingValue=null}_next(e){this.throttled?this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(y,this.duration,{subscriber:this})),this.leading?this.destination.next(e):this.trailing&&(this._trailingValue=e,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const e=this.throttled;e&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),e.unsubscribe(),this.remove(e),this.throttled=null)}}function y(a){const{subscriber:e}=a;e.clearThrottle()}var C=s(7545);class M{constructor(e){this.changes=e}static of(e){return new M(e)}notEmpty(e){if(this.changes[e]){const n=this.changes[e].currentValue;if(null!=n)return(0,l.of)(n)}return c.E}has(e){return this.changes[e]?(0,l.of)(this.changes[e].currentValue):c.E}notFirst(e){return this.changes[e]&&!this.changes[e].isFirstChange()?(0,l.of)(this.changes[e].currentValue):c.E}notFirstAndEmpty(e){if(this.changes[e]&&!this.changes[e].isFirstChange()){const n=this.changes[e].currentValue;if(null!=n)return(0,l.of)(n)}return c.E}}const O=new o.OlP("NGX_ECHARTS_CONFIG");let x=(()=>{class a{constructor(n,i,r){this.el=i,this.ngZone=r,this.autoResize=!0,this.loadingType="default",this.chartInit=new o.vpe,this.optionsError=new o.vpe,this.chartClick=this.createLazyEvent("click"),this.chartDblClick=this.createLazyEvent("dblclick"),this.chartMouseDown=this.createLazyEvent("mousedown"),this.chartMouseMove=this.createLazyEvent("mousemove"),this.chartMouseUp=this.createLazyEvent("mouseup"),this.chartMouseOver=this.createLazyEvent("mouseover"),this.chartMouseOut=this.createLazyEvent("mouseout"),this.chartGlobalOut=this.createLazyEvent("globalout"),this.chartContextMenu=this.createLazyEvent("contextmenu"),this.chartLegendSelectChanged=this.createLazyEvent("legendselectchanged"),this.chartLegendSelected=this.createLazyEvent("legendselected"),this.chartLegendUnselected=this.createLazyEvent("legendunselected"),this.chartLegendScroll=this.createLazyEvent("legendscroll"),this.chartDataZoom=this.createLazyEvent("datazoom"),this.chartDataRangeSelected=this.createLazyEvent("datarangeselected"),this.chartTimelineChanged=this.createLazyEvent("timelinechanged"),this.chartTimelinePlayChanged=this.createLazyEvent("timelineplaychanged"),this.chartRestore=this.createLazyEvent("restore"),this.chartDataViewChanged=this.createLazyEvent("dataviewchanged"),this.chartMagicTypeChanged=this.createLazyEvent("magictypechanged"),this.chartPieSelectChanged=this.createLazyEvent("pieselectchanged"),this.chartPieSelected=this.createLazyEvent("pieselected"),this.chartPieUnselected=this.createLazyEvent("pieunselected"),this.chartMapSelectChanged=this.createLazyEvent("mapselectchanged"),this.chartMapSelected=this.createLazyEvent("mapselected"),this.chartMapUnselected=this.createLazyEvent("mapunselected"),this.chartAxisAreaSelected=this.createLazyEvent("axisareaselected"),this.chartFocusNodeAdjacency=this.createLazyEvent("focusnodeadjacency"),this.chartUnfocusNodeAdjacency=this.createLazyEvent("unfocusnodeadjacency"),this.chartBrush=this.createLazyEvent("brush"),this.chartBrushEnd=this.createLazyEvent("brushend"),this.chartBrushSelected=this.createLazyEvent("brushselected"),this.chartRendered=this.createLazyEvent("rendered"),this.chartFinished=this.createLazyEvent("finished"),this.animationFrameID=null,this.resize$=new p.xQ,this.echarts=n.echarts}ngOnChanges(n){const i=M.of(n);i.notFirstAndEmpty("options").subscribe(r=>this.onOptionsChange(r)),i.notFirstAndEmpty("merge").subscribe(r=>this.setOption(r)),i.has("loading").subscribe(r=>this.toggleLoading(!!r)),i.notFirst("theme").subscribe(()=>this.refreshChart())}ngOnInit(){if(!window.ResizeObserver)throw new Error("please install a polyfill for ResizeObserver");this.resizeSub=this.resize$.pipe(function A(a,e=d.P,n=f){return i=>i.lift(new L(a,e,n.leading,n.trailing))}(100,d.z,{leading:!1,trailing:!0})).subscribe(()=>this.resize()),this.autoResize&&(this.resizeOb=this.ngZone.runOutsideAngular(()=>new window.ResizeObserver(()=>{this.animationFrameID=window.requestAnimationFrame(()=>this.resize$.next())})),this.resizeOb.observe(this.el.nativeElement))}ngOnDestroy(){window.clearTimeout(this.initChartTimer),this.resizeSub&&this.resizeSub.unsubscribe(),this.animationFrameID&&window.cancelAnimationFrame(this.animationFrameID),this.resizeOb&&this.resizeOb.unobserve(this.el.nativeElement),this.dispose()}ngAfterViewInit(){this.initChartTimer=window.setTimeout(()=>this.initChart())}dispose(){this.chart&&(this.chart.isDisposed()||this.chart.dispose(),this.chart=null)}resize(){this.chart&&this.chart.resize()}toggleLoading(n){this.chart&&(n?this.chart.showLoading(this.loadingType,this.loadingOpts):this.chart.hideLoading())}setOption(n,i){if(this.chart)try{this.chart.setOption(n,i)}catch(r){console.error(r),this.optionsError.emit(r)}}refreshChart(){var n=this;return(0,u.Z)(function*(){n.dispose(),yield n.initChart()})()}createChart(){const n=this.el.nativeElement;if(window&&window.getComputedStyle){const i=window.getComputedStyle(n,null).getPropertyValue("height");(!i||"0px"===i)&&(!n.style.height||"0px"===n.style.height)&&(n.style.height="400px")}return this.ngZone.runOutsideAngular(()=>("function"==typeof this.echarts?this.echarts:()=>Promise.resolve(this.echarts))().then(({init:r})=>r(n,this.theme,this.initOpts)))}initChart(){var n=this;return(0,u.Z)(function*(){yield n.onOptionsChange(n.options),n.merge&&n.chart&&n.setOption(n.merge)})()}onOptionsChange(n){var i=this;return(0,u.Z)(function*(){!n||(i.chart||(i.chart=yield i.createChart(),i.chartInit.emit(i.chart)),i.setOption(i.options,!0))})()}createLazyEvent(n){return this.chartInit.pipe((0,C.w)(i=>new t.y(r=>(i.on(n,h=>this.ngZone.run(()=>r.next(h))),()=>{this.chart&&(this.chart.isDisposed()||i.off(n))}))))}}return a.\u0275fac=function(n){return new(n||a)(o.Y36(O),o.Y36(o.SBq),o.Y36(o.R0b))},a.\u0275dir=o.lG2({type:a,selectors:[["echarts"],["","echarts",""]],inputs:{options:"options",theme:"theme",loading:"loading",initOpts:"initOpts",merge:"merge",autoResize:"autoResize",loadingType:"loadingType",loadingOpts:"loadingOpts"},outputs:{chartInit:"chartInit",optionsError:"optionsError",chartClick:"chartClick",chartDblClick:"chartDblClick",chartMouseDown:"chartMouseDown",chartMouseMove:"chartMouseMove",chartMouseUp:"chartMouseUp",chartMouseOver:"chartMouseOver",chartMouseOut:"chartMouseOut",chartGlobalOut:"chartGlobalOut",chartContextMenu:"chartContextMenu",chartLegendSelectChanged:"chartLegendSelectChanged",chartLegendSelected:"chartLegendSelected",chartLegendUnselected:"chartLegendUnselected",chartLegendScroll:"chartLegendScroll",chartDataZoom:"chartDataZoom",chartDataRangeSelected:"chartDataRangeSelected",chartTimelineChanged:"chartTimelineChanged",chartTimelinePlayChanged:"chartTimelinePlayChanged",chartRestore:"chartRestore",chartDataViewChanged:"chartDataViewChanged",chartMagicTypeChanged:"chartMagicTypeChanged",chartPieSelectChanged:"chartPieSelectChanged",chartPieSelected:"chartPieSelected",chartPieUnselected:"chartPieUnselected",chartMapSelectChanged:"chartMapSelectChanged",chartMapSelected:"chartMapSelected",chartMapUnselected:"chartMapUnselected",chartAxisAreaSelected:"chartAxisAreaSelected",chartFocusNodeAdjacency:"chartFocusNodeAdjacency",chartUnfocusNodeAdjacency:"chartUnfocusNodeAdjacency",chartBrush:"chartBrush",chartBrushEnd:"chartBrushEnd",chartBrushSelected:"chartBrushSelected",chartRendered:"chartRendered",chartFinished:"chartFinished"},exportAs:["echarts"],features:[o.TTD]}),a})(),z=(()=>{class a{static forRoot(n){return{ngModule:a,providers:[{provide:O,useValue:n}]}}static forChild(){return{ngModule:a}}}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=o.oAB({type:a}),a.\u0275inj=o.cJS({}),a})()}}]);