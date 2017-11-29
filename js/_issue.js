 /**
 * @api                 {get}           /issues a.고객문의 조회
 * @apiName             issue select
 * @apiGroup            Issue
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
 * @apiSuccess      {Integer}        type       구분 (일반=0 / 상품=1 / 주문=2 / 배송=3)
 * @apiSuccess      {String}        title       제목
 * @apiSuccess      {String}        text        문의내용
 * @apiSuccess      {String}        created     생성일(default:now())
 * @apiSuccess      {String}        deleted     삭제일
 * @apiSuccess      {ObjectId}      issueId     이슈 아이디
 * @apiSuccess      {ObjectId}      userId      사용자 아이디
 * 
 * 
 * @apiUse           adminError
 */

/**
 * @api                 {post}           /issues/:id/issueAnswers b.고객문의 답변
 * @apiName             issueAnswer write
 * @apiGroup            Issue
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
 * @apiParam    {ObjectId}      id              이슈 아이디
 * @apiParam    {String}        text                 이슈 답변 내용    
 * 
 * 
 * @apiSuccess    {ObjectId}      issueId              이슈 아이디
 * @apiSuccess    {String}        text                 이슈 답변 내용    
 * @apiSuccess    {String}        created              등록일   
 * @apiSuccess    {String}        deleted              삭제일  
 * 
 * @apiUse           adminError
 */