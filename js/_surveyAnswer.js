

/**
 * @api                 {get}           /admin/:id/surveyAnswers/:fk b.설문 응답자 조회
 * @apiVersion          0.1.0
 * @apiName             surveyAnswers select
 * @apiGroup            SurveyAnswers
 * 
 * @apiPermission       User
 * @apiHeader           (User) {String} authorization Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 *
 * @apiParam             id                         사용자 아이디
 * @apiParam             fk                         설문지 아이디

 * @apiSuccessExample
 *  HTTP/1.1 200 OK

    {
        "todo":"todo"
    }

 * @apiUse           adminError
 */
