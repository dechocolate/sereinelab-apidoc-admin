 /**
 * @api                 {get}           /purchases a.구매내역 조회
 * @apiName             purchase select
 * @apiGroup            Purchase
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
 * @apiSuccess      {String}        date        구매일 (default : now())    
 * @apiSuccess      {String}        summary     구매품 요약
 * @apiSuccess      {Integer}        supply      공급가
 * @apiSuccess      {Integer}        discount    할인가
 * @apiSuccess      {Integer}        price       가격
 * @apiSuccess      {String}        address     주소
 * @apiSuccess      {Integer}       progress     주문 상태(준비=0/ 완료=1/ 취소=2) 
 * @apiSuccess      {Boolean}       res          결제 상태(성공=true/ 실패=false)  
 * @apiSuccess      {ObjectId}     userId       사용자 아이디
 * @apiSuccess      {ObjectId}     importKey    3rd lib 결제키
 * @apiSuccess      {ObjectId}     deliveryKey  배송업체 키
 * 
 * 
 * @apiUse           adminError
 */

/**
 * @api                 {post}           /users/:id/purchases b.구매내역 개인 조회
 * @apiName             personal purchase select
 * @apiGroup            Purchase
 *
 * @apiPermission       Admin
 * @apiHeader           {String} 		Authorization value.
 * @apiHeaderExample    {json}          Header-Example:
 *  {
 *    "Authorization": "accessTokenId"
 *  } 
 * 
 * @apiDescription
 * Creates a new instance in issueAnswers of this model
 *
 * 
 * @apiParam    {ObjectId}      id              사용자 아이디
 * 
 * 
 * @apiSuccess      {String}        date        구매일 (default : now())    
 * @apiSuccess      {String}        summary     구매품 요약
 * @apiSuccess      {Integer}        supply      공급가
 * @apiSuccess      {Integer}        discount    할인가
 * @apiSuccess      {Integer}        price       가격
 * @apiSuccess      {String}        address     주소
 * @apiSuccess      {Integer}       progress     주문 상태(준비=0/ 완료=1/ 취소=2) 
 * @apiSuccess      {Boolean}       res          결제 상태(성공=true/ 실패=false)
 * @apiSuccess      {ObjectId}     userId       사용자 아이디
 * @apiSuccess      {ObjectId}     importKey    3rd lib 결제키
 * @apiSuccess      {ObjectId}     deliveryKey  배송업체 키
 * 
 * @apiUse           adminError
 */