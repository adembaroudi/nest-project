"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyCommentController = void 0;
const common_1 = require("@nestjs/common");
const replyComment_dto_1 = require("./dto/replyComment.dto");
const replyComment_service_1 = require("./replyComment.service");
let replyCommentController = class replyCommentController {
    constructor(replyService) {
        this.replyService = replyService;
    }
    async NewComment(idcomment, replyDto) {
        const addcomment = await this.replyService.repComment(idcomment, replyDto);
        return addcomment;
    }
    async getReplyByComment(idcomment) {
        const replies = await this.replyService.getReplyByComment(idcomment);
        return replies;
    }
    async nbrComments(idcomment) {
        const nbrReplies = await this.replyService.nbrReplies(idcomment);
        return nbrReplies;
    }
    async deleteReplies(idreply, res) {
        await this.replyService.deleteReplies(idreply);
        return res.status(common_1.HttpStatus.OK).json({
            message: "reply deleted successuly",
        });
    }
};
__decorate([
    common_1.Put("/repcomment/:idcomment"),
    __param(0, common_1.Param("idcomment")),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, replyComment_dto_1.replyCommentDto]),
    __metadata("design:returntype", Promise)
], replyCommentController.prototype, "NewComment", null);
__decorate([
    common_1.Get("/getrepliesByComment/:idcomment"),
    __param(0, common_1.Param("idcomment")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], replyCommentController.prototype, "getReplyByComment", null);
__decorate([
    common_1.Get("/nbrReplies/:idcomment"),
    __param(0, common_1.Param("idcomment")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], replyCommentController.prototype, "nbrComments", null);
__decorate([
    common_1.Delete("/Replies/:idreply"),
    __param(0, common_1.Param("idreply")), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], replyCommentController.prototype, "deleteReplies", null);
replyCommentController = __decorate([
    common_1.Controller("replycomment"),
    __metadata("design:paramtypes", [replyComment_service_1.replyCommentService])
], replyCommentController);
exports.replyCommentController = replyCommentController;
//# sourceMappingURL=replyComment.controller.js.map