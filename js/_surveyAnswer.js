

/**
 * @api                 {get}          surveyAnswers/:id a.설문 응답자 조회
 * @apiVersion          0.1.0
 * @apiName             surveyAnswers select
 * @apiGroup            SurveyAnswer
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
 * @apiParam             id                         설문답변 아이디

 * @apiUse           adminError
 */
