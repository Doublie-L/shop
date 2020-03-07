"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const login_controller_1 = require("./login.controller");
describe('Login Controller', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [login_controller_1.LoginController],
        }).compile();
        controller = module.get(login_controller_1.LoginController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=login.controller.spec.js.map