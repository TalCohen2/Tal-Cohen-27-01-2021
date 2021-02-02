(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/q8S":
/*!********************************************!*\
  !*** ./src/app/manage/manage.component.ts ***!
  \********************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/messages.service */ "Hzbo");
/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-list/message-list.component */ "gAji");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function ManageComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "please select message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "messageActive": a0 }; };
class ManageComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
    }
    ngOnInit() {
        this.messagesService.getMessages();
    }
}
ManageComponent.ɵfac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"])); };
ManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageComponent, selectors: [["app-manage"]], decls: 8, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-3", "fullHeight", "messageList"], [1, "col-sm-9", "message", "fullHeight", "col-xs-12", 3, "ngClass"], ["messageOutlet", "outlet"], ["class", "selectMessage", 4, "ngIf"], [1, "selectMessage"], ["src", "../../assets/images/mail.png", "alt", ""]], template: function ManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-message-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ManageComponent_div_7_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, _r0.isActivated));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.isActivated);
    } }, directives: [_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_2__["MessageListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > .fullHeight[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 61px);\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > .messageList[_ngcontent-%COMP%] {\r\n  border-right: 1px solid black;\r\n  padding-top: 10px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > .messageList[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n  margin: 10px 0;\r\n}\r\n\r\ndiv.row[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.selectMessage[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n  flex-direction: column;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.selectMessage[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  margin-top: 10px;\r\n}\r\n\r\n@media screen and (max-width:767px) {\r\n\r\n  div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > .fullHeight[_ngcontent-%COMP%] {\r\n    height: calc(100vh - 61px);\r\n  }\r\n\r\n  div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > .messageList[_ngcontent-%COMP%] {\r\n    border-right: none;\r\n  }\r\n\r\n  div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > .message[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > .messageActive[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    height: calc(100vh - 51px);\r\n  }\r\n  div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > div.selectMessage[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUU7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTiwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6Im1hbmFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2PmRpdj4uZnVsbEhlaWdodCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjFweCk7XHJcbn1cclxuXHJcbmRpdj5kaXY+Lm1lc3NhZ2VMaXN0IHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuZGl2PmRpdj4ubWVzc2FnZUxpc3Q+ZGl2IHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuZGl2LnJvdyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5kaXY+ZGl2PmRpdj5kaXYuc2VsZWN0TWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5kaXY+ZGl2PmRpdj5kaXYuc2VsZWN0TWVzc2FnZT5wIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG5cclxuICBkaXY+ZGl2Pi5mdWxsSGVpZ2h0IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYxcHgpO1xyXG4gIH1cclxuXHJcbiAgZGl2PmRpdj4ubWVzc2FnZUxpc3Qge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgZGl2PmRpdj4ubWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgZGl2PmRpdj4ubWVzc2FnZUFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUxcHgpO1xyXG4gIH1cclxuICBkaXY+ZGl2PmRpdj5kaXYuc2VsZWN0TWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage',
                templateUrl: './manage.component.html',
                styleUrls: ['./manage.component.css']
            }]
    }], function () { return [{ type: _services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\herolo\test\client\src\main.ts */"zUnb");


/***/ }),

/***/ "64KX":
/*!**********************************************!*\
  !*** ./src/app/compose/compose.component.ts ***!
  \**********************************************/
/*! exports provided: ComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeComponent", function() { return ComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/messages.service */ "Hzbo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["messageForm"];
function ComposeComponent_div_16_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r6);
} }
function ComposeComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComposeComponent_div_16_p_1_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.formErrors);
} }
function ComposeComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ComposeComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} }
class ComposeComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.formErrors = []; // defines the form errors list.
        this.sendInProcess = false; // responsible for form buttons accessibility by send status
        this.messageSentSub = this.messageService.sentMessageStatusEmitter.subscribe((status) => {
            if (!status) {
                this.clearForm();
            }
            else {
                this.formErrors.push(status);
            }
            this.sendInProcess = false;
        });
    }
    ngOnInit() { }
    onSubmit() {
        if (!this.sendInProcess) {
            this.formErrors = [];
            let form = this.messageForm.form.value;
            if (isNaN(form.receiverId)) {
                this.formErrors.push("IDs should be a number");
            }
            else if (!Number.isInteger(form.receiverId)) {
                this.formErrors.push("ID should be an integer");
            }
            else if (form.receiverId < 1) {
                this.formErrors.push("ID should be with positive value");
            }
            else if (String(form.receiverId).length > 16) {
                this.formErrors.push("ID's letter length should be less then 17");
            }
            if (!form.subject || form.subject.trim() == "") {
                this.formErrors.push("Subject should not be empty");
            }
            if (!form.message || form.message.trim() == "") {
                this.formErrors.push("Message should not be empty");
            }
            if (!this.formErrors.length) {
                this.sendInProcess = true;
                this.messageService.writeMessage(form);
            }
        }
    }
    clearForm() {
        this.formErrors = [];
        this.messageForm.reset();
    }
    ngOnDestroy() {
        this.messageSentSub.unsubscribe();
    }
}
ComposeComponent.ɵfac = function ComposeComponent_Factory(t) { return new (t || ComposeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"])); };
ComposeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComposeComponent, selectors: [["app-compose"]], viewQuery: function ComposeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageForm = _t.first);
    } }, decls: 23, vars: 5, consts: [["ngNativeValidate", "", 3, "ngSubmit"], ["messageForm", "ngForm"], [1, "form-group"], ["for", "receiverId"], ["type", "number", "min", "0", "step", "1", "required", "", "ngModel", "", "name", "receiverId", 1, "form-control"], ["for", "subject"], ["type", "text", "required", "", "ngModel", "", "name", "subject", 1, "form-control"], ["for", "Message"], ["required", "", "ngModel", "", "name", "message", 1, "form-control"], ["class", "errorAlertsHolder", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-success", "pull-right", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["loader", ""], [1, "errorAlertsHolder"], ["class", "alert alert-danger", 4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"], [1, "loader"]], template: function ComposeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ComposeComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Receiver ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ComposeComponent_div_16_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComposeComponent_Template_button_click_17_listener() { return ctx.clearForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ComposeComponent_span_20_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ComposeComponent_ng_template_21_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.sendInProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.sendInProcess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sendInProcess)("ngIfElse", _r3);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  padding: 20px 10px;\r\n  margin: 20px auto 0;\r\n  max-width: 300px;\r\n  min-width: 200px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] > .errorAlertsHolder[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  resize: none;\r\n}\r\n\r\nform[_ngcontent-%COMP%] > legend[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n  border: 5px solid #f3f3f3;\r\n  border-top: 5px solid #3498db;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation: spin 1s linear infinite;\r\n  margin: 0 auto;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoiY29tcG9zZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBtYXJnaW46IDIwcHggYXV0byAwO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuZm9ybT4uZXJyb3JBbGVydHNIb2xkZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbmZvcm0+ZGl2PnRleHRhcmVhIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuZm9ybT5sZWdlbmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgIzM0OThkYjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComposeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-compose',
                templateUrl: './compose.component.html',
                styleUrls: ['./compose.component.css']
            }]
    }], function () { return [{ type: _services_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"] }]; }, { messageForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messageForm', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] }]
        }] }); })();


/***/ }),

/***/ "8GJb":
/*!*****************************************************!*\
  !*** ./src/app/manage/message/message.component.ts ***!
  \*****************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/messages.service */ "Hzbo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MessageComponent {
    constructor(messagesService, router, route) {
        this.messagesService = messagesService;
        this.router = router;
        this.route = route;
        this.message = { subject: '', message: '', senderId: 0, receiverId: 0 }; // defines the message data
        this.deletedMessageSub = this.messagesService.deletedMessageEmitter.subscribe((messageId) => {
            if (this.message.messageId == messageId) {
                this.routeBack();
            }
        });
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            let messageData = this.messagesService.getMessageById(+params.id);
            if (messageData) {
                this.message = messageData;
            }
            else {
                this.routeBack();
            }
        });
        this.messageStatus = this.messagesService.messageStatus;
    }
    routeBack() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.deletedMessageSub.unsubscribe();
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], decls: 11, vars: 4, consts: [[1, "backgroundLayer", 3, "click"], [1, "panel", "panel-default"], [1, "panel-heading"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-remove", "pull-right", 3, "click"], [1, "panel-title"], [1, "panel-body"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_Template_div_click_0_listener() { return ctx.routeBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_Template_span_click_3_listener() { return ctx.routeBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.messageStatus ? "From" : "To", ": ", ctx.messageStatus ? ctx.message.senderId : ctx.message.receiverId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.message);
    } }, styles: [".panel[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  max-height: calc(100vh - 71px);\r\n  overflow-y: auto;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%] > .panel-heading[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.panel[_ngcontent-%COMP%] > .panel-heading[_ngcontent-%COMP%] > .glyphicon[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  word-wrap: break-word;\r\n}\r\n\r\n.backgroundLayer[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n@media screen and (max-width:767px) {\r\n\r\n  .panel[_ngcontent-%COMP%] > .panel-heading[_ngcontent-%COMP%] > .glyphicon[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    cursor: pointer;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .backgroundLayer[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .panel[_ngcontent-%COMP%] > .panel-body[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    position: relative;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjs7QUFFRiIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDcxcHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5wYW5lbD4ucGFuZWwtaGVhZGluZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucGFuZWw+LnBhbmVsLWhlYWRpbmc+LmdseXBoaWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5oMyxcclxucCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZExheWVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XHJcblxyXG4gIC5wYW5lbD4ucGFuZWwtaGVhZGluZz4uZ2x5cGhpY29uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmJhY2tncm91bmRMYXllciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5wYW5lbD4ucGFuZWwtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message',
                templateUrl: './message.component.html',
                styleUrls: ['./message.component.css']
            }]
    }], function () { return [{ type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bx2m":
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");



class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        if (this.authService.token) {
            let tokenHeader = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authService.token}`
                }
            });
            return next.handle(tokenHeader);
        }
        return next.handle(request);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "GQVZ":
/*!****************************************************************************!*\
  !*** ./src/app/manage/message-list/message-item/message-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: MessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItemComponent", function() { return MessageItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/messages.service */ "Hzbo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class MessageItemComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.status = true; //inherits message status from parent (true = received, false = sent).
    }
    ngOnInit() {
    }
    deleteMessage(event) {
        event.stopPropagation();
        this.messagesService.deleteMessage(this.message.messageId);
    }
}
MessageItemComponent.ɵfac = function MessageItemComponent_Factory(t) { return new (t || MessageItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"])); };
MessageItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageItemComponent, selectors: [["app-message-item"]], inputs: { message: "message", status: "status" }, decls: 10, vars: 8, consts: [["routerLinkActive", "active", 1, "list-group-item", "clearfix", 3, "routerLink"], [1, "mb-1"], [1, "text-muted"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-trash", "pull-right", 3, "click"]], template: function MessageItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageItemComponent_Template_span_click_9_listener($event) { return ctx.deleteMessage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.message.messageId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, ctx.message.creationDate, "short"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.status ? "From" : "To", ":", ctx.status ? ctx.message.senderId : ctx.message.receiverId, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".active[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  font-weight: bold;\r\n  color: black;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%] {\r\n  z-index: 0 !important;\r\n  outline: 0;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8f9fa\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  background-color: #337ab7 !important;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n}\r\n\r\n.active[_ngcontent-%COMP%]:focus {\r\n  outline: 0;\r\n}\r\n\r\n.glyphicon-trash[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\r\n  max-width: calc(100% - 17px);\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJtZXNzYWdlLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUgLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oNSB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgei1pbmRleDogMCAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmFcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlPmRpdj5oNSB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY3RpdmU6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi5nbHlwaGljb24tdHJhc2gge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuZGl2IHNtYWxsIHtcclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDE3cHgpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message-item',
                templateUrl: './message-item.component.html',
                styleUrls: ['./message-item.component.css']
            }]
    }], function () { return [{ type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"] }]; }, { message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiService {
    constructor(http) {
        this.http = http;
        this.messagesEndPoint = 'messages'; // Sets the messages API endpoint
        this.usersEndPoint = 'users'; // Sets the users API endpoint
    }
    writeMessage(messageObj) {
        return this.http.post(`${this.messagesEndPoint}/writeMessage`, messageObj);
    }
    deleteMessage(messageData) {
        return this.http.delete(`${this.messagesEndPoint}/deleteMessage`, { params: messageData });
    }
    getMessages() {
        return this.http.get(`${this.messagesEndPoint}/getMessages`);
    }
    loginUser(id, password) {
        return this.http.post(`${this.usersEndPoint}/login`, {
            id: id,
            password: password
        });
    }
    registerNewUser(id, password) {
        return this.http.post(this.usersEndPoint, {
            id: id,
            password: password
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Hzbo":
/*!**********************************************!*\
  !*** ./src/app/services/messages.service.ts ***!
  \**********************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "H+bZ");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "lGQG");






class MessagesService {
    constructor(apiService, authService) {
        this.apiService = apiService;
        this.authService = authService;
        this.messages = { "sent": [], "received": [] }; // defines the user messages list ordered by received and sent
        this.status = true; // defines the status of the current displaying messages (true = received, false = sent).
        this.messagesEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // emits the list of the requested messages and their status.
        this.deletedMessageEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // emits the message id when the message is deleted.
        this.sentMessageStatusEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // emits the sent message status (success or failure)
    }
    writeMessage(messageObj) {
        this.apiService.writeMessage(messageObj).subscribe((result) => {
            this.sentMessageStatusEmitter.next('');
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                // sweetAlert2 modal design definition
                position: 'top-end',
                icon: 'success',
                title: 'Your message has been sent',
                showConfirmButton: false,
                timer: 2000
            });
        }, (error) => {
            let errorMessage = 'Something went wrong...';
            if (error.error.logout) {
                this.authService.logout();
                this.displayServerError(error.error.message);
            }
            else {
                if (typeof error.error == 'string') {
                    errorMessage = error.error;
                }
                this.sentMessageStatusEmitter.next(errorMessage);
            }
        });
    }
    deleteMessage(messageId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            // sweetAlert2 modal design definition
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                let messageObj = {
                    messageId: messageId,
                    status: this.status ? 'received' : 'sent'
                };
                this.apiService.deleteMessage(messageObj).subscribe((res) => {
                    let messageIndex = this.messages[messageObj.status].findIndex(message => message.messageId == messageId);
                    if (messageIndex != -1) {
                        this.messages[messageObj.status].splice(messageIndex, 1);
                        this.getMessagesByStatus(this.status);
                        this.deletedMessageEmitter.next(messageId);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            // sweetAlert2 modal design definition
                            position: 'top-end',
                            icon: 'success',
                            title: 'Message deleted successfully',
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                }, (err) => {
                    let errorMessage = 'Something went wrong...';
                    if (err.error.logout) {
                        this.authService.logout();
                        errorMessage = err.error.message;
                    }
                    else if (typeof err.error == 'string') {
                        errorMessage = err.error;
                    }
                    this.displayServerError(errorMessage);
                });
            }
        });
    }
    getMessages() {
        this.apiService.getMessages().subscribe((result) => {
            this.messages = result;
            this.getMessagesByStatus(true);
        }, (err) => {
            let errorMessage = 'Something went wrong';
            if (err.error.logout) {
                this.authService.logout();
                errorMessage = err.error.message;
            }
            else if (typeof err.error == 'string') {
                errorMessage = err.error;
            }
            this.displayServerError(errorMessage);
        });
    }
    getMessagesByStatus(status) {
        this.status = status;
        let messageStatus = status ? 'received' : 'sent';
        let messagesData = {
            messages: this.messages[messageStatus].slice(),
            status: status
        };
        this.messagesEmitter.next(messagesData);
    }
    getMessageById(messageId) {
        let messageStatus = this.status ? 'received' : 'sent';
        return this.messages[messageStatus].find(message => message.messageId == messageId);
    }
    displayServerError(message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            // sweetAlert2 modal design definition
            icon: 'error',
            title: 'Oops...',
            text: message
        });
    }
    get messageStatus() {
        return this.status;
    }
}
MessagesService.ɵfac = function MessagesService_Factory(t) { return new (t || MessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
MessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessagesService, factory: MessagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["userForm"];
function AuthComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_div_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7);
} }
function AuthComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_div_13_p_1_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.formErrors);
} }
function AuthComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
} }
class AuthComponent {
    constructor(authService) {
        this.authService = authService;
        this.isLogin = true; // defines the form role (true - login, false - register).
        this.authInProgress = false; // define if auth request has been sent for form buttons accessibility.
        this.formErrors = []; // array of the form errors.
        this.errorSub = this.authService.authErrorsEmitter.subscribe((errorMsg) => {
            this.clearForm();
            this.formErrors.push(errorMsg);
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        if (!this.authInProgress) {
            this.formErrors = [];
            this.authInProgress = true;
            let form = this.userForm.form.value;
            if (isNaN(form.userId)) {
                this.formErrors.push('ID should be a number');
            }
            else if (!Number.isInteger(form.userId) || form.userId < 1) {
                this.formErrors.push('ID should be integer and greater then 0');
            }
            else if (String(form.userId).length > 16) {
                this.formErrors.push("ID must be less then 17 characters");
            }
            if (form.password.trim() == '') {
                this.formErrors.push('Password is required');
            }
            else if (!this.isLogin) {
                if (!this.isLogin && (!form.passwordConfirmation || form.passwordConfirmation != form.password)) {
                    this.formErrors.push('Passwords should be matched');
                }
                if (!form.password.match(/[0-9]/g)) {
                    this.formErrors.push('Password should contain at least 1 digit');
                }
                if (!form.password.match(/[A-Z]/g)) {
                    this.formErrors.push('Password should contain at least 1 uppercase letter');
                }
                if (!form.password.match(/[a-z]/g)) {
                    this.formErrors.push('Password should contain at least 1 lowercase letter');
                }
                if (form.password.length < 8) {
                    this.formErrors.push('Password should be at least 8 characters');
                }
            }
            if (!this.formErrors.length) {
                if (this.isLogin) {
                    this.authService.login(form.userId, form.password);
                }
                else {
                    this.authService.register(form.userId, form.password);
                }
            }
            else {
                this.authInProgress = false;
            }
        }
    }
    onSwitch() {
        this.isLogin = !this.isLogin;
        this.formErrors = [];
    }
    clearForm() {
        this.formErrors = [];
        this.authInProgress = false;
        this.userForm.controls['password'].reset();
        if (!this.isLogin) {
            this.userForm.controls['passwordConfirmation'].reset();
        }
    }
    ngOnDestroy() {
        this.errorSub.unsubscribe();
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], viewQuery: function AuthComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.userForm = _t.first);
    } }, decls: 20, vars: 8, consts: [["ngNativeValidate", "", 3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-group"], ["for", "userId"], ["type", "number", "min", "1", "step", "1", "required", "", "ngModel", "", "name", "userId", 1, "form-control"], ["for", "password"], ["type", "password", "required", "", "ngModel", "", "name", "password", 1, "form-control"], ["class", "form-group", 4, "ngIf"], ["class", "errorAlertsHolder", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "submit", 1, "btn", "btn-success", "pull-right", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["loader", ""], ["for", "passwordConfirmation"], ["type", "password", "required", "", "ngModel", "", "name", "passwordConfirmation", 1, "form-control"], [1, "errorAlertsHolder"], ["class", "alert alert-danger", 4, "ngFor", "ngForOf"], [1, "alert", "alert-danger"], [1, "loader"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AuthComponent_div_12_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthComponent_div_13_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_Template_button_click_14_listener() { return ctx.onSwitch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AuthComponent_span_17_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AuthComponent_ng_template_18_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isLogin ? "Login" : "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formErrors.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.authInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Switch to ", ctx.isLogin ? "register" : "login", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.authInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authInProgress)("ngIfElse", _r4);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=number][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  margin: 20px auto 0;\r\n  padding: 20px 10px;\r\n  max-width: 390px;\r\n  min-width: 230px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] > .errorAlertsHolder[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] > legend[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n  border: 5px solid #f3f3f3;\r\n  border-top: 5px solid #3498db;\r\n  border-radius: 50%;\r\n  width: 20px;\r\n  height: 20px;\r\n  animation: spin 1s linear infinite;\r\n  margin: 0 auto;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiAzOTBweDtcclxuICBtaW4td2lkdGg6IDIzMHB4O1xyXG59XHJcblxyXG5mb3JtPi5lcnJvckFsZXJ0c0hvbGRlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuZm9ybT5sZWdlbmQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItdG9wOiA1cHggc29saWQgIzM0OThkYjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { userForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['userForm', { read: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] }]
        }] }); })();


/***/ }),

/***/ "P+IX":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        var _a;
        // guard routes by user status (logged or not).
        let currentRoute = (_a = route.routeConfig) === null || _a === void 0 ? void 0 : _a.path;
        let userLogged = this.authService.token;
        if (userLogged) {
            if (currentRoute == 'auth') {
                return this.router.createUrlTree(['/compose']);
            }
            else {
                return true;
            }
        }
        else {
            if (currentRoute == 'auth') {
                return true;
            }
            else {
                return this.router.createUrlTree(['/auth']);
            }
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'messaging-system';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compose/compose.component */ "64KX");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage/manage.component */ "/q8S");
/* harmony import */ var _manage_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage/message-list/message-list.component */ "gAji");
/* harmony import */ var _manage_message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manage/message/message.component */ "8GJb");
/* harmony import */ var _manage_message_list_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage/message-list/message-item/message-item.component */ "GQVZ");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");
/* harmony import */ var _services_messages_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/messages.service */ "Hzbo");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./token.interceptor */ "Bx2m");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
        _services_messages_service__WEBPACK_IMPORTED_MODULE_14__["MessagesService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _compose_compose_component__WEBPACK_IMPORTED_MODULE_7__["ComposeComponent"],
        _manage_manage_component__WEBPACK_IMPORTED_MODULE_8__["ManageComponent"],
        _manage_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_9__["MessageListComponent"],
        _manage_message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"],
        _manage_message_list_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_11__["MessageItemComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _compose_compose_component__WEBPACK_IMPORTED_MODULE_7__["ComposeComponent"],
                    _manage_manage_component__WEBPACK_IMPORTED_MODULE_8__["ManageComponent"],
                    _manage_message_list_message_list_component__WEBPACK_IMPORTED_MODULE_9__["MessageListComponent"],
                    _manage_message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"],
                    _manage_message_list_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_11__["MessageItemComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                providers: [
                    _services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
                    _services_messages_service__WEBPACK_IMPORTED_MODULE_14__["MessagesService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HeaderComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Compose message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manage messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_2_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, _r4.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _r5.isActive));
} }
function HeaderComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Authentication");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userStatus = false; // current user status.
        // updates user status.
        this.userStatus = !!authService.token;
        this.userStatusSub = this.authService.userStatusEmitter.subscribe((status) => {
            this.userStatus = status;
        });
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.userStatusSub.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 3, consts: [["role", "navigation", 1, "navbar", "navbar-inverse", "navbar-static-top"], ["class", "glyphicon glyphicon-menu-hamburger", "aria-hidden", "true", 4, "ngIf"], ["class", "nav navbar-nav authenticated", 4, "ngIf", "ngIfElse"], ["authTab", ""], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-menu-hamburger"], [1, "nav", "navbar-nav", "authenticated"], [3, "ngClass"], ["routerLink", "compose", "routerLinkActive", ""], ["compose", "routerLinkActive"], ["routerLink", "manage", "routerLinkActive", ""], ["manage", "routerLinkActive"], [3, "click"], [1, "nav", "navbar-nav", "auth"], [1, "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_span_1_Template, 1, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_ul_2_Template, 12, 6, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_ng_template_3_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userStatus)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  border-radius: 0;\r\n  white-space: nowrap;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > span.glyphicon[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > ul.authenticated[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  white-space: nowrap;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] > ul.auth[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n}\r\n\r\n@media screen and (max-width:767px) { \r\n\r\n  nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]    > span.glyphicon[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    color: white;\r\n    align-self: center;\r\n    font-size: 30px;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n    padding: 10px 0;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] > ul.authenticated[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] > ul.authenticated[_ngcontent-%COMP%]:hover, nav[_ngcontent-%COMP%]    > span.glyphicon[_ngcontent-%COMP%]:hover    ~ ul.authenticated[_ngcontent-%COMP%]  {\r\n    position: absolute;\r\n    width: 150px;\r\n    background-color: #222;\r\n    display: flex!important;\r\n    flex-direction: column;\r\n    left: 0px;\r\n    top: 50px;\r\n    margin: 0;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%] > ul.auth[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n\r\n  nav[_ngcontent-%COMP%]    > ul.auth[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    \r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxxQkFBcUI7O0VBRXZCO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbm5hdj51bCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm5hdiA+IHNwYW4uZ2x5cGhpY29uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5uYXYgPiB1bC5hdXRoZW50aWNhdGVkID4gbGk6bGFzdC1jaGlsZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxubmF2PnVsPmxpPmEge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbm5hdj51bC5hdXRoPmxpIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHsgXHJcblxyXG4gIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgbmF2ID4gc3Bhbi5nbHlwaGljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxuICBuYXY+dWwuYXV0aGVudGljYXRlZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgbmF2PnVsLmF1dGhlbnRpY2F0ZWQ6aG92ZXIsIG5hdiA+IHNwYW4uZ2x5cGhpY29uOmhvdmVyIH4gdWwuYXV0aGVudGljYXRlZCAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIG5hdj51bC5hdXRoIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIG5hdiA+IHVsLmF1dGggPiBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "gAji":
/*!***************************************************************!*\
  !*** ./src/app/manage/message-list/message-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/messages.service */ "Hzbo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-item/message-item.component */ "GQVZ");





function MessageListComponent_div_7_app_message_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-message-item", 6);
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", i_r4)("status", ctx_r3.status);
} }
function MessageListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageListComponent_div_7_app_message_item_1_Template, 1, 2, "app-message-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messages);
} }
function MessageListComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There are no messages to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
class MessageListComponent {
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.messages = []; // defines the received messages list
        this.status = true; // defines the current messages status (true = received, false = sent)
        this.messagesSub = this.messagesService.messagesEmitter.subscribe((messagesData) => {
            if (messagesData != null) {
                this.messages = messagesData.messages.reverse();
                this.status = messagesData.status;
            }
            else {
                this.messages = [];
            }
        });
    }
    ngOnInit() {
    }
    getMessagesByStatus(status) {
        this.messagesService.getMessagesByStatus(status);
    }
    ngOnDestroy() {
        this.messagesSub.unsubscribe();
    }
}
MessageListComponent.ɵfac = function MessageListComponent_Factory(t) { return new (t || MessageListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"])); };
MessageListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageListComponent, selectors: [["app-message-list"]], decls: 10, vars: 8, consts: [[1, "nav", "nav-tabs"], ["role", "presentation", 1, "tab", 3, "ngClass", "click"], ["class", "list-group", 4, "ngIf", "ngIfElse"], ["noneMessages", ""], [1, "list-group"], [3, "message", "status", 4, "ngFor", "ngForOf"], [3, "message", "status"]], template: function MessageListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageListComponent_Template_li_click_1_listener() { return ctx.getMessagesByStatus(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageListComponent_Template_li_click_4_listener() { return ctx.getMessagesByStatus(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MessageListComponent_div_7_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MessageListComponent_ng_template_8_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.status));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !ctx.status));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_3__["MessageItemComponent"]], styles: [".list-group[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 103px);\r\n  overflow-y: auto;\r\n}\r\n\r\napp-message-item[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%] > .tab[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Im1lc3NhZ2UtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtZ3JvdXAge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwM3B4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG5hcHAtbWVzc2FnZS1pdGVtLFxyXG4ubmF2Pi50YWIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message-list',
                templateUrl: './message-list.component.html',
                styleUrls: ['./message-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_messages_service__WEBPACK_IMPORTED_MODULE_1__["MessagesService"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "H+bZ");






class AuthService {
    constructor(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.logged = { token: null, userId: null }; // defines the logged user data.
        this.authErrorsEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // emits auth errors.
        this.userStatusEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // emits user status (logged or not).
        // manages the user data and status on application start
        let _sess = localStorage.getItem('_sess');
        let date = new Date();
        if (_sess) {
            _sess = JSON.parse(_sess);
            let tokenExpirationDate = this.getTokenExpirationDate(_sess);
            if (tokenExpirationDate && tokenExpirationDate < date) {
                this.logout();
            }
            else {
                this.setLogged(_sess);
            }
        }
    }
    login(userId, password) {
        this.apiService.loginUser(userId, password).subscribe((res) => {
            this.setLogged(res, true);
            this.router.navigate(['/']);
        }, (err) => {
            let errorMessage = 'Oops, something went wrong...';
            if (typeof err.error == 'string') {
                errorMessage = err.error;
            }
            this.authErrorsEmitter.next(errorMessage);
        });
    }
    register(userId, password) {
        this.apiService.registerNewUser(userId, password).subscribe((res) => {
            this.setLogged(res, true);
            this.router.navigate(['/']);
        }, (err) => {
            let errorMessage = 'Oops, something went wrong...';
            if (typeof err.error == 'string') {
                errorMessage = err.error;
            }
            this.authErrorsEmitter.next(errorMessage);
        });
    }
    logout() {
        this.setLogged({
            token: null,
            id: null
        }, true);
        this.router.navigate(['/auth']);
    }
    getTokenExpirationDate(sess) {
        if (sess.token === null)
            return null;
        const decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_1__["default"])(sess.token);
        if (decoded.exp === undefined)
            return null;
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }
    setLogged(sess, storeSess = false) {
        this.logged.token = sess.token;
        this.logged.userId = sess.id;
        if (storeSess) {
            localStorage.setItem('_sess', JSON.stringify(sess));
        }
        this.userStatusEmitter.next(!!this.logged.token);
    }
    get token() {
        return this.logged.token;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "P+IX");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compose/compose.component */ "64KX");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage/manage.component */ "/q8S");
/* harmony import */ var _manage_message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage/message/message.component */ "8GJb");









// App routes definition
const routes = [
    { path: 'auth', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'compose', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_4__["ComposeComponent"] },
    { path: 'manage', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__["ManageComponent"], children: [
            { path: ':id', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _manage_message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"] }
        ] },
    { path: '**', redirectTo: '/compose' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map