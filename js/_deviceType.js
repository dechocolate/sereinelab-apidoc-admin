
/**
 * @api                 {post}           /deviceTypes a.기기 종류 등록
 * @apiVersion          0.1.0
 * @apiName             deviceType List
 * @apiGroup            DeviceType
 *
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 *
 *
 * @apiParam          {String}        name            상품명(한글)
 * @apiParam          {String}        english         상품명(영어)    
 * @apiParam          {Boolean}       isSelling       판매 진행 여부 
 * @apiParam          {Integer}       supply          공급가            
 * @apiParam          {Integer}       price           판매가             
 * @apiParam          {Integer}       count           수량            
 * @apiParam          {String}        alarm           알람 수량
 * @apiParam          {String}        text            상세 설명           
 * 
 * @apiSuccess          {String}        name            상품명(한글)
 * @apiSuccess          {String}        english         상품명(영어)    
 * @apiSuccess          {Boolean}       isSelling       판매 진행 여부 
 * @apiSuccess          {Integer}       supply          공급가            
 * @apiSuccess          {Integer}       price           판매가             
 * @apiSuccess          {Integer}       count           수량            
 * @apiSuccess          {String}        alarm           알람 수량
 * @apiSuccess          {String}        text            상세 설명           
 * @apiSuccess          {String}        id              Id   
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *  [
        {
            "name": "한글상품명",
            "english": "English name",
            "isSelling": true,
            "supply": 1000,
            "price": 2000,
            "discount": 30,
            "count": 50,
            "alarm": 20,
            "text": "상세 설명",
            "id": 2
        }
    ]
 */

 /**
 * @api                 {get}           /deviceTypes/:id b.기기 종류 조회
 * @apiVersion          0.1.0
 * @apiName             deviceType Select
 * @apiGroup            DeviceType
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 *
 * @apiParam            {Integer}       id              ID
 *
 * @apiSuccess          {String}        name            상품명(한글)
 * @apiSuccess          {String}        english         상품명(영어)    
 * @apiSuccess          {Boolean}       isSelling       판매 진행 여부 
 * @apiSuccess          {Integer}       supply          공급가            
 * @apiSuccess          {Integer}       price           판매가             
 * @apiSuccess          {Integer}       count           수량            
 * @apiSuccess          {String}        alarm           알람 수량
 * @apiSuccess          {String}        text            상세 설명           
 * @apiSuccess          {String}        id              Id           
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *  
    {
        "name": "한글상품명",
        "english": "English name",
        "isSelling": true,
        "supply": 1000,
        "price": 2000,
        "discount": 30,
        "count": 50,
        "alarm": 20,
        "text": "상세 설명",
        "id": 2
    }
    * @apiUse adminError
 
 */

/**
 * @api                 {put}           /deviceTypes/:id c.기기 종류 수정
 * @apiVersion          0.1.0
 * @apiName             deviceType update
 * @apiGroup            DeviceType
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 *
 * @apiParam            {Integer}       id              ID
 * @apiParam          {String}        name            상품명(한글)
 * @apiParam          {String}        english         상품명(영어)    
 * @apiParam          {Boolean}       isSelling       판매 진행 여부 
 * @apiParam          {Integer}       supply          공급가            
 * @apiParam          {Integer}       price           판매가             
 * @apiParam          {Integer}       count           수량            
 * @apiParam          {String}        alarm           알람 수량
 * @apiParam          {String}        text            상세 설명   
 *
 * @apiSuccess          {String}        id              Id           
 * @apiSuccess          {String}        name            상품명(한글)
 * @apiSuccess          {String}        english         상품명(영어)    
 * @apiSuccess          {Boolean}       isSelling       판매 진행 여부 
 * @apiSuccess          {Integer}       supply          공급가            
 * @apiSuccess          {Integer}       price           판매가             
 * @apiSuccess          {Integer}       count           수량            
 * @apiSuccess          {String}        alarm           알람 수량
 * @apiSuccess          {String}        text            상세 설명           
\ * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *  
    {
        "name": "한글상품명",
        "english": "English name",
        "isSelling": true,
        "supply": 1000,
        "price": 2000,
        "discount": 30,
        "count": 50,
        "alarm": 20,
        "text": "상세 설명",
        "id": 2
    }
   * @apiUse adminError
  
 */

 /**
 * @api                 {delete}           /deviceTypes/:id d.기기 종류 삭제
 * @apiVersion          0.1.0
 * @apiName             deviceType delete
 * @apiGroup            DeviceType
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 *
 * @apiParam            {Integer}       id              ID
 *
 * @apiSuccess          {Integer}        count            삭제 갯수        
 * 
 * @apiSuccessExample
 *  HTTP/1.1 200 OK
 *  
    {
        "count": 0
    }
     * @apiUse adminError

 */