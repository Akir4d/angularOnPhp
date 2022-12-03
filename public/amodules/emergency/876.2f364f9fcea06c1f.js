"use strict";(self.webpackChunkemergency=self.webpackChunkemergency||[]).push([[876],{1876:(Y,p,n)=>{n.r(p),n.d(p,{UsersModule:()=>c});var i=n(433),d=n(6895),a=n(1002),x=n(590),t=n(8256),g=n(6191),h=n(1740),Z=n(4247),v=n(7280);function T(s,r){1&s&&(t.TgZ(0,"small",19),t._uU(1,"First Name is required"),t.qZA())}function b(s,r){1&s&&(t.TgZ(0,"small"),t._uU(1,"Last Name is required"),t.qZA())}function A(s,r){1&s&&(t.TgZ(0,"small"),t._uU(1,"Username is required"),t.qZA())}function C(s,r){1&s&&(t.TgZ(0,"small"),t._uU(1,"Password is required"),t.qZA())}function N(s,r){1&s&&(t.TgZ(0,"small"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function U(s,r){1&s&&t._UZ(0,"i",20)}const m=function(s){return{"is-invalid":s}};function q(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const f=t.oxw();return t.KtG(f.onSubmit())}),t.TgZ(1,"div",4)(2,"span",5),t._UZ(3,"input",6),t.TgZ(4,"label",7),t._uU(5,"First Name"),t.qZA(),t.YNc(6,T,2,0,"small",8),t.qZA()(),t.TgZ(7,"div",4)(8,"span",5),t._UZ(9,"input",9),t.TgZ(10,"label",10),t._uU(11,"Last Name"),t.qZA(),t.YNc(12,b,2,0,"small",11),t.qZA()(),t.TgZ(13,"div",4)(14,"span",5),t._UZ(15,"input",12),t.TgZ(16,"label",10),t._uU(17,"Username"),t.qZA(),t.YNc(18,A,2,0,"small",11),t.qZA()(),t.TgZ(19,"div",4)(20,"span",5),t._UZ(21,"input",13),t.TgZ(22,"label",14),t._uU(23,"Password"),t.qZA(),t.YNc(24,C,2,0,"small",11),t.YNc(25,N,2,0,"small",11),t.qZA()(),t.TgZ(26,"div",15)(27,"button",16),t._uU(28,"Cancel"),t.qZA(),t.TgZ(29,"button",17),t.YNc(30,U,1,0,"i",18),t._uU(31," Save "),t.qZA()()()}if(2&s){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(3),t.Q6J("ngClass",t.VKq(11,m,e.submitted&&e.f.firstName.errors)),t.xp6(3),t.Q6J("ngIf",e.submitted&&e.f.username.errors),t.xp6(3),t.Q6J("ngClass",t.VKq(13,m,e.submitted&&e.f.lastName.errors)),t.xp6(3),t.Q6J("ngIf",e.submitted&&(null==e.f.lastName.errors?null:e.f.lastName.errors.required)),t.xp6(3),t.Q6J("ngClass",t.VKq(15,m,e.submitted&&e.f.username.errors)),t.xp6(3),t.Q6J("ngIf",e.submitted&&(null==e.f.username.errors?null:e.f.username.errors.required)),t.xp6(3),t.Q6J("ngClass",t.VKq(17,m,e.submitted&&e.f.password.errors)),t.xp6(3),t.Q6J("ngIf",e.submitted&&(null==e.f.password.errors?null:e.f.password.errors.required)),t.xp6(1),t.Q6J("ngIf",e.submitted&&(null==e.f.password.errors?null:e.f.password.errors.minlength)),t.xp6(5),t.Q6J("ngIf",e.submitting)}}class o{constructor(r,e,l,f,y){this.formBuilder=r,this.route=e,this.router=l,this.accountService=f,this.alertService=y,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({firstName:[this.accountService.userValue?.firstName,i.kI.required],lastName:[this.accountService.userValue?.lastName,i.kI.required],username:[this.accountService.userValue?.username,i.kI.required],password:["",[i.kI.minLength(6),...this.id?[]:[i.kI.required]]]}),this.title="Edit Admin"}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.saveUser().pipe((0,x.P)()).subscribe({next:()=>{this.alertService.success("User saved",{keepAfterRouteChange:!0}),this.router.navigateByUrl("/users")},error:r=>{this.alertService.error(r),this.submitting=!1}}))}saveUser(){return this.accountService.update(this.id,this.form.value)}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(a.gz),t.Y36(a.F0),t.Y36(g.B),t.Y36(g.c))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:3,vars:2,consts:[[1,"p-4"],[3,"header"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"field","m-2","px-5","py-3"],[1,"p-float-label"],["type","text","pInputText","","formControlName","firstName",1,"form-control",3,"ngClass"],["for","float-input"],["class","p-error block",4,"ngIf"],["type","text","pInputText","","formControlName","lastName",1,"form-control",3,"ngClass"],["for","form-label"],[4,"ngIf"],["type","text","pInputText","","formControlName","username",1,"form-control",3,"ngClass"],["type","password","pInputText","","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-label"],[1,"flex","flex-row","flex-wrap","card-container"],["pButton","","type","button","routerLink","/",1,"ml-2","p-button-secondary"],["pButton","submitting",1,"ml-2"],["class","pi pi-spin pi-spinner",4,"ngIf"],[1,"p-error","block"],[1,"pi","pi-spin","pi-spinner"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0)(1,"p-card",1),t.YNc(2,q,32,19,"form",2),t.qZA()()),2&e&&(t.xp6(1),t.s9C("header",l.title),t.xp6(1),t.Q6J("ngIf",!l.loading))},dependencies:[d.mk,d.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,a.rH,h.o,Z.Z,v.Hq],encapsulation:2})}const I=[{path:"",component:o,children:[{path:"add",component:o},{path:"edit/:id",component:o}]}];class u{static#t=this.\u0275fac=function(e){return new(e||u)};static#e=this.\u0275mod=t.oAB({type:u});static#s=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(I),a.Bz]})}var J=n(2174),S=n(5132);class c{static#t=this.\u0275fac=function(e){return new(e||c)};static#e=this.\u0275mod=t.oAB({type:c});static#s=this.\u0275inj=t.cJS({imports:[d.ez,i.UX,u,J.fx,h.j,S.l,Z.d,v.hJ]})}}}]);