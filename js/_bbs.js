
/**
 * @api                 {post}           /bbs 게시판 등록 
 * @apiVersion          0.1.0
 * @apiName             bbs regist
 * @apiGroup            Bbs
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
 * @apiParam          {String}        type            게시판 종류 (공지사항=0/도움말=1)
 * @apiParam          {String}        title           제목      
 * @apiParam          {String}        text            내용
 * 
 * @apiSuccess          {ObjectId}        id             게시판 아이디  
 * @apiSuccess          {Integer}        type           게시판 종류 (공지사항=0/도움말=1)
 * @apiSuccess          {String}        title           제목      
 * @apiSuccess          {String}        text            내용
 * @apiSuccess          {Boolean}       display         표시여부 (default true)                      
 * @apiSuccess          {Integer}       count           조회수  (default 0)           
 * @apiSuccess          {Date}       created            등록 일 (default now())
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *
    {
        "type": "공지사항",
        "title": "공지 제목",
        "text": "공지 내용",
        "display": true,
        "count": 0,
        "created": "2017-11-15T11:00:18.880Z",
        "id": 1
    }
*/

/**
 * @api                 {get}           /bbs/:id 게시판 조회 
 * @apiVersion          0.1.0
 * @apiName             bbs select
 * @apiGroup            Bbs
 *
 * @apiDescription
 * Find a model instance by {{id}} from the data source.
 *
 * @apiParam          {ObjectId}        id             게시판 아이디  
 * 
 * @apiSuccess          {ObjectId}        id             게시판 아이디
 * @apiSuccess          {Integer}        type            게시판 종류 (공지사항=0/도움말=1)
 * @apiSuccess          {String}        title           제목      
 * @apiSuccess          {String}        text            내용
 * @apiSuccess          {Boolean}       display         표시여부            
 * @apiSuccess          {Integer}       count           조회수             
 * @apiSuccess          {Integer}       created          등록 일
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *[
    {
		"id": 1
        "type": "공지사항",
        "title": "공지 제목",
        "text": "공지 내용",
        "display": true,
        "count": 0,
        "created": "2017-11-15T11:00:18.880Z",        
	}
*] 
*/

/**
 * @api                 {put}           /bbs/:id 게시판 수정 
 * @apiVersion          0.1.0
 * @apiName             bbs update
 * @apiGroup            Bbs
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
 * @apiParam          {ObjectId}        id             게시판 아이디  
 * @apiParam          {Integer}        type           게시판 종류 (공지사항=0/도움말=1)
 * @apiParam          {String}        title           제목      
 * @apiParam          {String}        text            내용
 * @apiParam          {Boolean}       display         표시여부 (default true)        
 *  
 * @apiSuccess          {ObjectId}        id             게시판 아이디
 * @apiSuccess          {Integer}        type            게시판 종류 (공지사항=0/도움말=1)
 * @apiSuccess          {String}        title           제목      
 * @apiSuccess          {String}        text            내용
 * @apiSuccess          {Boolean}       display         표시여부            
 * @apiSuccess          {Integer}       count           조회수             
 * @apiSuccess          {Integer}       created          등록 일
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *
    {
		"id": 1
        "type": 0,
        "title": "공지 제목",
        "text": "공지 내용",
        "display": true,
        "count": 0,
        "created": "2017-11-15T11:00:18.880Z",    
    }
*/

/**
 * @api                 {delete}           /bbs/:id 게시판 삭제 
 * @apiVersion          0.1.0
 * @apiName             bbs delete
 * @apiGroup            Bbs
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
 * @apiParam          {ObjectId}        id             게시판 아이디  
 * 
 * @apiSuccess          {String}       count            게시판 삭제갯수 
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *
    {
        "count": 1
    }
*/