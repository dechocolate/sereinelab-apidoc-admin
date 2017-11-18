
/**
 * @api                 {post}           /survey 설문지 등록 
 * @apiVersion          0.1.0
 * @apiName             survey regist
 * @apiGroup            Survey
 * 
 * @apiPermission       Survey
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * @apiDescription
 * Create a new instance of the model and persist it into the data source.
 *
 * @apiParam          {String}        title           설문지 제목      
 * @apiParam          {String}        desc            설문지 설명
 * 
 * @apiSuccess          {ObjectId}        id          설문지 아이디  
 * @apiSuccess          {String}        title         설문지 제목      
 * @apiSuccess          {String}        desc          설문지 설명
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *
    {
        "title": "설문지 제목",
        "desc": "설문지 설명",
        "id": 2
    }
*/

/**
 * @api                 {get}           /survey/:id 설문지 조회 
 * @apiVersion          0.1.0
 * @apiName             survey select
 * @apiGroup            Survey
 *
 * @apiPermission       Survey
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Find a model instance by {{id}} from the data source.
 *
 * @apiParam          {ObjectId}        id             설문지 아이디  
 * 
 * @apiSuccess          {ObjectId}        id           설문지 아이디
 * @apiSuccess          {String}        title          설문지 제목      
 * @apiSuccess          {String}        desc           설문지 설명
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
    {
        "title": "설문지 제목",
        "desc": "설문지 설명",
        "id": 2
    }
*/

/**
 * @api                 {put}           /survey/:id 설문지 수정 
 * @apiVersion          0.1.0
 * @apiName             survey update
 * @apiGroup            Survey
 * 
 * @apiPermission       Survey
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * @apiDescription
 * Replace attributes for a model instance and persist it into the data source.
 *
 * @apiParam          {ObjectId}        id            설문지 아이디  
 * @apiParam          {ObjectId}      surveyid        설문지 아이디 todo  
 * @apiParam          {String}        title           설문지 제목      
 * @apiParam          {String}        desc            설문지 설명
 *  
 * @apiSuccess          {ObjectId}        id            설문지 아이디  
 * @apiSuccess          {ObjectId}      surveyid        설문지 아이디  
 * @apiSuccess          {String}        title           설문지 제목      
 * @apiSuccess          {String}        desc            설문지 설명
 * 
 * 
 * @apiSuccessExample
 {
    "title": "설문지 제목 수정",
    "desc": "설문지 설명 수정",
    "id": 2,
    "surveyId": 0
}
*/

/**
 * @api                 {delete}           /survey/:id 설문지 삭제 
 * @apiVersion          0.1.0
 * @apiName             survey delete
 * @apiGroup            Survey
 * 
 * @apiPermission       Survey
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * @apiDescription
 * Delete a model instance by {{id}} from the data source.
 * 
 * @apiParam          {ObjectId}        id             설문지 아이디  
 * 
 * @apiSuccess          {String}       count            설문지 삭제갯수 
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *
    {
        "count": 1
    }
*/




/**
 * @api                 {post}           /survey/:id/surveyQuestion 설문지 질문 작성 
 * @apiVersion          0.1.0
 * @apiName             surveyQuestion regist
 * @apiGroup            Survey
 * 
 * @apiPermission       Survey
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * @apiDescription
 * Create a new instance of the model and persist it into the data source.
 
 * @apiParam          {ObjectId}      id              설문지 질문 아이디
 * @apiParam          {ObjectId}      surveyid        설문지 아이디
 * @apiParam          {ObjectId}      type            설문지 질문 종류 (객관식/ 주관식/ 양자/ 범위/ 정도)  
 * @apiParam          {String}        title           설문지 질문 제목      
 * @apiParam          {String}        mapping         맵핑
 * @apiParam          {Boolean}       display         사용 여부
 * 
 * @apiSuccess          {ObjectId}      id              설문지 질문 아이디
 * @apiSuccess          {ObjectId}      surveyid        설문지 아이디
 * @apiSuccess          {ObjectId}      type            설문지 질문 종류 (객관식/ 주관식/ 양자/ 범위/ 정도)  
 * @apiSuccess          {String}        title           설문지 질문 제목      
 * @apiSuccess          {String}        mapping         설문지 질문 맵핑
 * @apiSuccess          {Boolean}       display         사용 여부
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 {
    "type": "객관식",
    "title": "설문지 질문 제목",
    "mapping": "맵핑",
    "display": true,
    "id": 1,
    "surveyId": 1
}
*/

/**
 * @api                 {get}           /survey/:id/surveyQuestion 설문지 질문 조회
 * @apiVersion          0.1.0
 * @apiName             surveyQuestion select
 * @apiGroup            Survey
 *
 * @apiPermission       Survey
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Queries surveyQuestions of survey.
 *
 * @apiParam          {ObjectId}        id             설문지 아이디  
 * 
 * @apiSuccess          {ObjectId}      fk              설문지 질문 아이디
 * @apiSuccess          {ObjectId}      type            설문지 질문 종류 (객관식/ 주관식/ 양자/ 범위/ 정도)  
 * @apiSuccess          {String}        title          설문지 제목      
 * @apiSuccess          {String}        desc           설문지 설명
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
  [
    {
        "type": "객관식",
        "title": "설문지 질문 제목",
        "mapping": "맵핑",
        "display": true,
        "id": 1,
        "surveyId": 1
    }
]
*/

/**
 * @api                 {put}           /survey/:id/surveyQuestion/:fk 설문지 질문 수정 
 * @apiVersion          0.1.0
 * @apiName             surveyQuestion update
 * @apiGroup            Survey
 * 
 * @apiPermission       Survey
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * @apiDescription
 * Replace attributes for a model instance and persist it into the data source.
 *
 * @apiParam          {ObjectId}        id            설문지 아이디  
 * @apiParam          {ObjectId}        fk            설문지 질문 아이디   
 * @apiParam          {ObjectId}      type            설문지 질문 종류 (객관식/ 주관식/ 양자/ 범위/ 정도)  
 * @apiParam          {String}        title           설문지 질문 제목      
 * @apiParam          {String}        mapping         맵핑

 
 * @apiSuccess          {ObjectId}        id            설문지 아이디  
 * @apiSuccess          {ObjectId}        fk            설문지 질문 아이디   
 * @apiSuccess          {ObjectId}      type            설문지 질문 종류 (객관식/ 주관식/ 양자/ 범위/ 정도)  
 * @apiSuccess          {String}        title           설문지 질문 제목      
 * @apiSuccess          {String}        mapping         맵핑
 * 
 * @apiSuccessExample
    {
        "type": "주관식",
        "title": "설문지 질문 제목",
        "mapping": "맵핑",
        "display": true,
        "id": 1,
        "surveyId": 1
    }
*/

/**
 * @api                 {delete}           /survey/:id/surveyQuestion/:fk 설문지 질문 삭제 
 * @apiVersion          0.1.0
 * @apiName             surveyQuestion delete
 * @apiGroup            Survey
 * 
 * @apiPermission       Survey
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * @apiDescription
 * Delete a model instance by {{id}} from the data source.
 * 
 * @apiParam          {ObjectId}        id            설문지 아이디  
 * @apiParam          {ObjectId}        fk            설문지 질문 아이디 
 * 
 * 
 * 
*/


