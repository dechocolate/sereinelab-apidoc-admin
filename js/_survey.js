
/**
 * @api                 {post}           /surveys a.설문지 등록 
 * @apiVersion          0.1.0
 * @apiName             survey regist
 * @apiGroup            Survey
 * 
 * @apiPermission       Admin
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
 * @apiUse adminError
*/

/**
 * @api                 {get}           /surveys/:id b.설문지 조회 
 * @apiVersion          0.1.0
 * @apiName             survey select
 * @apiGroup            Survey
 *
 * @apiPermission       Admin
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
 * @apiParam          {Json}            filter         filter 
 *  
 * 
 * @apiSuccess          {String}        title          설문지 제목      
 * @apiSuccess          {String}        desc           설문지 설명
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
    {
        "title": "설문지 제목",
        "desc": "설문지 설명"
    }
 * @apiSuccessExample   {json}      Filter-example (상세조회 쿼리)
   {
	"include": { 
		"relation": "surveyQuestions", 			
		"scope": {
			"include": "surveyItems"
		} 
	} 	
}
*/

/**
 * @api                 {put}           /surveys/:id c.설문지 수정 
 * @apiVersion          0.1.0
 * @apiName             survey update
 * @apiGroup            Survey
 * 
 * @apiPermission       Admin
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
 * @apiParam          {String}        title           설문지 제목      
 * @apiParam          {String}        desc            설문지 설명
 *  
 * @apiSuccess          {String}        title           설문지 제목      
 * @apiSuccess          {String}        desc            설문지 설명
 * 
 * 
 * @apiSuccessExample
 {
    "title": "설문지 제목 수정",
    "desc": "설문지 설명 수정"
}
 * @apiUse adminError

*/

/**
 * @api                 {delete}           /surveys/:id d.설문지 삭제 
 * @apiVersion          0.1.0
 * @apiName             survey delete
 * @apiGroup            Survey
 * 
 * @apiPermission       Admin
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
 * @apiUse adminError

*/




/**
 * @api                 {post}           /surveys/:id/surveyQuestions e.설문지 질문 작성 
 * @apiVersion          0.1.0
 * @apiName             surveyQuestion write
 * @apiGroup            Survey
 * 
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * @apiDescription
 * Create a new instance of the model and persist it into the data source.
 
 * @apiParam          {ObjectId}      id              설문지 질문 아이디
 * @apiParam          {Integer}      type            설문지 질문 종류 (객관식=0/ 주관식=1/ 양자=2/ 범위=3/ 정도=4)  
 * @apiParam          {String}        title           설문지 질문 제목      
 * @apiParam          {String}        mapping         맵핑
 * 
 * @apiSuccess          {ObjectId}      id              설문지 질문 아이디
 * @apiSuccess          {ObjectId}      surveyid        설문지 아이디
 * @apiSuccess          {Integer}      type            설문지 질문 종류 (객관식=0/ 주관식=1/ 양자=2/ 범위=3/ 정도=4)    
 * @apiSuccess          {String}        title           설문지 질문 제목      
 * @apiSuccess          {String}        mapping         설문지 질문 맵핑
 * @apiSuccess          {Boolean}       display         사용 여부 (default true) 
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 {
    "type": 0,
    "title": "설문지 질문 제목",
    "mapping": "맵핑",
    "display": true,
    "id": 1,
    "surveyId": 1
}
 * @apiUse adminError

*/

/**
 * @api                 {get}           /surveys/:id/surveyQuestions f.설문지 질문 조회
 * @apiVersion          0.1.0
 * @apiName             surveyQuestion select
 * @apiGroup            Survey
 *
 * @apiPermission       Admin
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
 * @apiParam          {Json}            filter         filter
 *   
 * @apiSuccess          {ObjectId}      fk              설문지 질문 아이디
 * @apiSuccess          {Integer}      type            설문지 질문 종류 (객관식=0/ 주관식=1/ 양자=2/ 범위=3/ 정도=4)    
 * @apiSuccess          {String}        title          설문지 제목      
 * @apiSuccess          {String}        desc           설문지 설명
 * @apiSuccess          {boolean}        display         사용 여부 (default true) 

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
* @apiSuccessExample   {json}      Filter-example (상세조회 쿼리)
   {
	"include": { 
		"relation": "surveyQuestions", 			
		"scope": {
			"include": "surveyItems"
		} 
	} 	
}
 * @apiUse adminError

*/

/**
 * @api                 {put}           /surveys/:id/surveyQuestions/:fk g.설문지 질문 수정 
 * @apiVersion          0.1.0
 * @apiName             surveyQuestion update
 * @apiGroup            Survey
 * 
 * @apiPermission       Admin
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
 * @apiParam          {Integer}      type            설문지 질문 종류 (객관식=0/ 주관식=1/ 양자=2/ 범위=3/ 정도=4)    
 * @apiParam          {String}        title           설문지 질문 제목      
 * @apiParam          {String}        mapping         맵핑
 * @apiParam          {boolean}        display         사용 여부 (default true) 

 
 * @apiSuccess          {ObjectId}        id            설문지 아이디  
 * @apiSuccess          {ObjectId}        fk            설문지 질문 아이디   
 * @apiSuccess          {Integer}       type            설문지 질문 종류 (객관식=0/ 주관식=1/ 양자=2/ 범위=3/ 정도=4)    
 * @apiSuccess          {String}        title           설문지 질문 제목      
 * @apiSuccess          {String}        mapping         맵핑
 * @apiSuccess          {boolean}        display         사용 여부 (default true) 

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
 * @api                 {delete}           /surveys/:id/surveyQuestions/:fk h.설문지 질문 삭제 
 * @apiVersion          0.1.0
 * @apiName             surveyQuestion delete
 * @apiGroup            Survey
 * 
 * @apiPermission       Admin
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
 *  
 * @apiUse adminError
*/




/**
 * @api                 {post}           /surveyQuestions/:id/surveyItems i.설문지 질문 선택사항 작성
 * @apiVersion          0.1.0
 * @apiName             surveyItems write
 * @apiGroup            Survey
 * 
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * @apiDescription
 * Create a new instance of the model and persist it into the data source.
 
 * @apiParam          {ObjectId}        id             설문지 질문 아이디  
 * @apiParam          {String}        text           질문 선택사항 텍스트 
 * @apiParam          {String}        value          질문 선택사항 값 
 *   
 * @apiSuccess          {ObjectId}      id                          설문지 질문 아이디 
 * @apiSuccess          {ObjectId}      surveyQuestionId            질문 선택사항 아이디
 * @apiParam            {String}        text                        질문 선택사항 텍스트 
 * @apiParam            {String}        value                       질문 선택사항 값 
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 {
  "text": "string",
  "value": "string",
  "id": 1,
  "surveyQuestionId": 3
}
 * @apiUse adminError

*/

/**
 * @api                 {get}           /surveyQuestions/:id/surveyItems j.설문지 질문 선택사항 조회
 * @apiVersion          0.1.0
 * @apiName             surveyItems select
 * @apiGroup            Survey
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Queries surveyQuestions of survey.
 *
 * @apiParam          {ObjectId}        id             설문지 질문 아이디  
 * @apiParam          {String}        text           질문 선택사항 텍스트 
 * @apiParam          {String}        value          질문 선택사항 값 
 *   
 * @apiSuccess          {ObjectId}      id                          설문지 질문 아이디 
 * @apiSuccess          {ObjectId}      surveyQuestionId            질문 선택사항 아이디
 * @apiParam            {String}        text                        질문 선택사항 텍스트 
 * @apiParam            {String}        value                       질문 선택사항 값 

 * @apiSuccessExample
 *  HTTP/1.1 200 OK
  [
    {
        "text": "string",
        "value": "string",
        "id": 1,
        "surveyQuestionId": 3
    }
]
* @apiSuccessExample   {json}      Filter-example (상세조회 쿼리)
   {
	"include": { 
		"relation": "surveyQuestions", 			
		"scope": {
			"include": "surveyItems"
		} 
	} 	
}
 * @apiUse adminError

*/

/**
 * @api                 {put}           /surveyQuestions/:id/surveyItems/:fk k.설문지 질문 선택사항 수정
 * @apiVersion          0.1.0
 * @apiName             surveyItems update
 * @apiGroup            Survey
 * 
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * @apiDescription
 * Replace attributes for a model instance and persist it into the data source.
 *
 * @apiParam          {ObjectId}        id             설문지 질문 아이디  
 * @apiParam          {ObjectId}        fk             설문지 질문 선택사항 아이디  
 * @apiParam          {String}        text           질문 선택사항 텍스트 
 * @apiParam          {String}        value          질문 선택사항 값 
 *   
 * @apiSuccess          {ObjectId}      id                          설문지 질문 아이디 
 * @apiSuccess          {ObjectId}      surveyQuestionId            질문 선택사항 아이디
 * @apiParam            {String}        text                        질문 선택사항 텍스트 
 * @apiParam            {String}        value                       질문 선택사항 값 

 * 
 * @apiSuccessExample
    {
        "text": "string",
        "value": "string",
        "id": 1,
        "surveyQuestionId": 3
    }
*/

/**
 * @api                 {delete}           /surveyQuestions/:id/surveyItems/:fk l.설문지 질문 선택사항 삭제
 * @apiVersion          0.1.0
 * @apiName             surveyItems delete
 * @apiGroup            Survey
 * 
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 *
 * @apiDescription
 * Delete a model instance by {{id}} from the data source.
 * 
 * @apiParam          {ObjectId}        id            설문지 질문 아이디  
 * @apiParam          {ObjectId}        fk            질문 선택사항 아이디
 * 
 * 
 * 
 *  
 * @apiUse adminError
*/
