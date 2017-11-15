
/**
 * @api                 {get}           /admins/deviceTypes 기기종류 리스트 
 * @apiVersion          0.1.0
 * @apiName             deviceType List
 * @apiGroup            deviceType
 *
 * @apiDescription
 * Find all instances of the model matched by filter from the data 
 *
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
 * @api                 {get}           /admins/deviceTypes/:id 기기종류 조회
 * @apiVersion          0.1.0
 * @apiName             deviceType Select
 * @apiGroup            deviceType
 *
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
    
 */