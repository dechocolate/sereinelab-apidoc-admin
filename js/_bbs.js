
/**
 * @api                 {get}           /bbs 공지사항/도움말 리스트   
 * @apiVersion          0.1.0
 * @apiName             bbs List
 * @apiGroup            bbs
 *
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 *
 * @apiSuccess          {String}        type            게시판 종류(공지사항/도움말)
 * @apiSuccess          {String}        title           제목      
 * @apiSuccess          {String}        text            내용
 * @apiSuccess          {Boolean}       display         표시여부            
 * @apiSuccess          {Integer}       count           조회수             
 * @apiSuccess          {Integer}       create          등록 일
 * @apiSuccess          {Integer}        id              Id           
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 * [
    {
        "type": "공지사항",
        "title": "공지 제목",
        "text": "공지 내용",
        "display": true,
        "count": 0,
        "created": "2017-11-15T11:00:18.880Z",
        "id": 1
    },
    {
        "type": "도움말",
        "title": "도움말 제목",
        "text": "도움말 내용",
        "display": true,
        "count": 0,
        "created": "2017-11-15T11:00:18.880Z",
        "id": 2
    }
]
 */

/**
 * @api                 {post}           /bbs 공지사항/도움말 등록 
 * @apiVersion          0.1.0
 * @apiName             bbs regist
 * @apiGroup            bbs
 *
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 *
 * @apiParam          {String}        type            게시판 종류(공지사항/도움말)
 * @apiParam          {String}        title           제목      
 * @apiParam          {String}        text            내용
 * @apiParam          {Boolean}       display         표시여부            
 * @apiParam          {Integer}       count           조회수             
 * @apiParam          {Integer}       create          등록 일
 * 
 * @apiSuccess          {String}        type            게시판 종류(공지사항/도움말)
 * @apiSuccess          {String}        title           제목      
 * @apiSuccess          {String}        text            내용
 * @apiSuccess          {Boolean}       display         표시여부            
 * @apiSuccess          {Integer}       count           조회수             
 * @apiSuccess          {Integer}       create          등록 일
 * @apiSuccess          {Integer}        id              Id  
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
 * @api                 {get}           /bbs/:id 공지사항/도움말 조회 
 * @apiVersion          0.1.0
 * @apiName             bbs select
 * @apiGroup            bbs
 *
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 *
 * @apiParam            {Integer}        id              id
 * 
 * @apiSuccess          {String}        type            게시판 종류(공지사항/도움말)
 * @apiSuccess          {String}        title           제목      
 * @apiSuccess          {String}        text            내용
 * @apiSuccess          {Boolean}       display         표시여부            
 * @apiSuccess          {Integer}       count           조회수             
 * @apiSuccess          {Integer}       create          등록 일
 * @apiSuccess          {Integer}        id              Id  
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
 * @api                 {put}           /bbs 공지사항/도움말 수정 
 * @apiVersion          0.1.0
 * @apiName             bbs update
 * @apiGroup            bbs
 *
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 *
 * @apiHeader          {String}        type            게시판 종류(공지사항/도움말)
 * @apiHeader          {String}        title           제목      
 * @apiHeader          {String}        text            내용
 * @apiHeader          {Boolean}       display         표시여부            
 * @apiHeader          {Integer}       count           조회수             
 * @apiHeader          {Integer}       create          등록 일
 * @apiHeader          {Integer}        id              Id 
 *  
 * @apiSuccess          {String}        type            게시판 종류(공지사항/도움말)
 * @apiSuccess          {String}        title           제목      
 * @apiSuccess          {String}        text            내용
 * @apiSuccess          {Boolean}       display         표시여부            
 * @apiSuccess          {Integer}       count           조회수             
 * @apiSuccess          {Integer}       create          등록 일
 * @apiSuccess          {Integer}        id              Id  
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
 * @api                 {delete}           /bbs/:id 공지사항/도움말 삭제 
 * @apiVersion          0.1.0
 * @apiName             bbs delete
 * @apiGroup            bbs
 *
 * @apiDescription
 * Delete a model instance by {{id}} from the data source 
 * 
 * @apiParam           {Integer}       id               ID
 * 
 * @apiSuccess          {String}       count            공지사항/도움말 갯수 
 * 
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *
    {
        "count": 1
    }
*/