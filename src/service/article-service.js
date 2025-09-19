
import { createArticleValidation } from "../validation/article-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

export const createArticle = async (request, user) => {

    const articleData = validate(createArticleValidation, request);


    const article = await prismaClient.article.create({
        data: {
            ...articleData,
            username: user.username,
        },
        select: {
            id: true,
            title: true,
            category: true,
            published: true,
            createdAt: true,
        },
    });

    return article;
};