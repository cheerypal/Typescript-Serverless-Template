export default (bodyItems: any, userId?: string) => {
    const now = new Date().getTime();
    const generateUpdateQuery = (fields: any) => {
      let exp = {
        UpdateExpression:
          "SET modifiedBy = :modifiedBy, modifiedTimestamp = :modifiedTimestamp,",
        ExpressionAttributeNames: {},
        ExpressionAttributeValues: {
          ":modifiedTimestamp": now,
          ":modifiedBy": userId || null,
        },
      };
  
      Object.entries(fields).forEach(([key, item]) => {
        exp.UpdateExpression += ` #${key} = :${key},`;
        exp.ExpressionAttributeNames[`#${key}`] = key;
        exp.ExpressionAttributeValues[`:${key}`] = item;
      });
  
      exp.UpdateExpression = exp.UpdateExpression.slice(0, -1);
      return exp;
    };
  
    let data = bodyItems;
    let expression = generateUpdateQuery(data);
    return expression;
  };
  