"use strict";(self.webpackChunkemergency=self.webpackChunkemergency||[]).push([[267],{2267:(S,c,r)=>{r.r(c),r.d(c,{UsersModule:()=>u});var n=r(433),p=r(6895),o=r(1002),Z=r(590),t=r(8256),v=r(764),d=r(1740),g=r(4247),h=r(5593);function x(e,i){1&e&&(t.TgZ(0,"small",21),t._uU(1,"First Name is required"),t.qZA())}function b(e,i){1&e&&(t.TgZ(0,"small"),t._uU(1,"Last Name is required"),t.qZA())}function T(e,i){1&e&&(t.TgZ(0,"small"),t._uU(1,"Username is required"),t.qZA())}function A(e,i){1&e&&(t.TgZ(0,"small"),t._uU(1,"Password is required"),t.qZA())}function C(e,i){1&e&&(t.TgZ(0,"small"),t._uU(1,"Password must be at least 6 characters"),t.qZA())}function N(e,i){1&e&&t._UZ(0,"i",22)}const a=function(e){return{"is-invalid":e}};function U(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"form",3),t.NdJ("ngSubmit",function(){t.CHM(s);const y=t.oxw();return t.KtG(y.onSubmit())}),t.TgZ(1,"div",4)(2,"div",5)(3,"div",6)(4,"span",7),t._UZ(5,"input",8),t.TgZ(6,"label",9),t._uU(7,"First Name"),t.qZA(),t.YNc(8,x,2,0,"small",10),t.qZA()()(),t.TgZ(9,"div",5)(10,"div",6)(11,"span",7),t._UZ(12,"input",11),t.TgZ(13,"label",12),t._uU(14,"Last Name"),t.qZA(),t.YNc(15,b,2,0,"small",13),t.qZA()()(),t.TgZ(16,"div",5)(17,"div",6)(18,"span",7),t._UZ(19,"input",14),t.TgZ(20,"label",12),t._uU(21,"Username"),t.qZA(),t.YNc(22,T,2,0,"small",13),t.qZA()()(),t.TgZ(23,"div",5)(24,"div",6)(25,"span",7),t._UZ(26,"input",15),t.TgZ(27,"label",16),t._uU(28,"Password"),t.qZA(),t.YNc(29,A,2,0,"small",13),t.YNc(30,C,2,0,"small",13),t.qZA()()()(),t.TgZ(31,"div",17)(32,"button",18),t.YNc(33,N,1,0,"i",19),t._uU(34," Save "),t.qZA(),t.TgZ(35,"button",20),t._uU(36,"Cancel"),t.qZA()()()}if(2&e){const s=t.oxw();t.Q6J("formGroup",s.form),t.xp6(5),t.Q6J("ngClass",t.VKq(11,a,s.submitted&&s.f.firstName.errors)),t.xp6(3),t.Q6J("ngIf",s.submitted&&s.f.username.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(13,a,s.submitted&&s.f.lastName.errors)),t.xp6(3),t.Q6J("ngIf",s.submitted&&(null==s.f.lastName.errors?null:s.f.lastName.errors.required)),t.xp6(4),t.Q6J("ngClass",t.VKq(15,a,s.submitted&&s.f.username.errors)),t.xp6(3),t.Q6J("ngIf",s.submitted&&(null==s.f.username.errors?null:s.f.username.errors.required)),t.xp6(4),t.Q6J("ngClass",t.VKq(17,a,s.submitted&&s.f.password.errors)),t.xp6(3),t.Q6J("ngIf",s.submitted&&(null==s.f.password.errors?null:s.f.password.errors.required)),t.xp6(1),t.Q6J("ngIf",s.submitted&&(null==s.f.password.errors?null:s.f.password.errors.minlength)),t.xp6(3),t.Q6J("ngIf",s.submitting)}}class m{constructor(i,s,f){this.formBuilder=i,this.route=s,this.accountService=f,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({firstName:[this.accountService.userValue?.firstName,n.kI.required],lastName:[this.accountService.userValue?.lastName,n.kI.required],username:[this.accountService.userValue?.username,n.kI.required],password:["",[n.kI.minLength(6),...this.id?[]:[n.kI.required]]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,!this.form.invalid&&(this.submitting=!0,this.saveUser().pipe((0,Z.P)()).subscribe({next:()=>{this.submitting=!1},error:i=>{this.submitting=!1}}))}saveUser(){return this.accountService.update(this.form.value)}static#t=this.\u0275fac=function(s){return new(s||m)(t.Y36(n.qu),t.Y36(o.gz),t.Y36(v.BR))};static#s=this.\u0275cmp=t.Xpm({type:m,selectors:[["app-admin"]],decls:3,vars:1,consts:[[1,"col-12","md:col-9","xl:col-4"],["header","AOP User"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"grid"],[1,"col-12","md:col-6"],[1,"field","py-2"],[1,"p-float-label"],["type","text","pInputText","","formControlName","firstName",1,"w-full",3,"ngClass"],["for","float-input"],["class","p-error block",4,"ngIf"],["type","text","pInputText","","formControlName","lastName",1,"w-full",3,"ngClass"],["for","form-label"],[4,"ngIf"],["type","text","pInputText","","formControlName","username",1,"w-full",3,"ngClass"],["type","password","pInputText","","formControlName","password",1,"w-full",3,"ngClass"],[1,"form-label"],[1,"flex","flex-row-reverse"],["pButton","submitting",1,"m-1"],["class","pi pi-spin pi-spinner",4,"ngIf"],["pButton","button","routerLink","/",1,"m-1","p-button-secondary"],[1,"p-error","block"],[1,"pi","pi-spin","pi-spinner"]],template:function(s,f){1&s&&(t.TgZ(0,"div",0)(1,"p-card",1),t.YNc(2,U,37,19,"form",2),t.qZA()()),2&s&&(t.xp6(2),t.Q6J("ngIf",!f.loading))},dependencies:[p.mk,p.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,o.rH,d.o,g.Z,h.Hq],encapsulation:2})}const q=[{path:"",component:m}];class l{static#t=this.\u0275fac=function(s){return new(s||l)};static#s=this.\u0275mod=t.oAB({type:l});static#e=this.\u0275inj=t.cJS({imports:[o.Bz.forChild(q),o.Bz]})}var I=r(2174),J=r(5132);class u{static#t=this.\u0275fac=function(s){return new(s||u)};static#s=this.\u0275mod=t.oAB({type:u});static#e=this.\u0275inj=t.cJS({imports:[p.ez,n.UX,l,I.fx,d.j,J.l,g.d,h.hJ]})}}}]);