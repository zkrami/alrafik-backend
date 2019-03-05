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
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let BookController = class BookController {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async create(book) {
        return await this.bookRepository.create(book);
    }
    async count(where) {
        return await this.bookRepository.count(where);
    }
    async find(filter) {
        return await this.bookRepository.find(filter);
    }
    async updateAll(book, where) {
        return await this.bookRepository.updateAll(book, where);
    }
    async findById(id) {
        return await this.bookRepository.findById(id);
    }
    async updateById(id, book) {
        await this.bookRepository.updateById(id, book);
    }
    async replaceById(id, book) {
        await this.bookRepository.replaceById(id, book);
    }
    async deleteById(id) {
        await this.bookRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/books', {
        responses: {
            '200': {
                description: 'Book model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Book } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Book]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "create", null);
__decorate([
    rest_1.get('/books/count', {
        responses: {
            '200': {
                description: 'Book model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Book))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "count", null);
__decorate([
    rest_1.get('/books', {
        responses: {
            '200': {
                description: 'Array of Book model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Book } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Book))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "find", null);
__decorate([
    rest_1.patch('/books', {
        responses: {
            '200': {
                description: 'Book PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Book))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Book, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/books/{id}', {
        responses: {
            '200': {
                description: 'Book model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Book } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findById", null);
__decorate([
    rest_1.patch('/books/{id}', {
        responses: {
            '204': {
                description: 'Book PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Book]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateById", null);
__decorate([
    rest_1.put('/books/{id}', {
        responses: {
            '204': {
                description: 'Book PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Book]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/books/{id}', {
        responses: {
            '204': {
                description: 'Book DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteById", null);
BookController = __decorate([
    __param(0, repository_1.repository(repositories_1.BookRepository)),
    __metadata("design:paramtypes", [repositories_1.BookRepository])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map