function typeCheck(object) {
    const tempObject = {};
    Object.keys(object).forEach(key => {
        const [keyName, keyType] = key.split('_');
        tempObject[key] = {
            type: keyType,
            value: object[key]
        }
    });

    let objChecker = {
        set: function(target, key, value) {
                // console.log('target', target, `key- ${key}, value- ${value}`);
                const temp = tempObject[key];
                // console.log(temp);
                if ((temp.type === 'string' && typeof value !== 'string')
                || (temp.type === 'int' && typeof value !== 'number')
                || (temp.type === 'boolean' && typeof value !== 'boolean')) {
                    console.log(Error(`${key} must be ${temp.type} type`));
                    return true;
                }
                target[key] = value;
                return false;
            }
    };
    let resultObject = new Proxy(object, objChecker);
    return resultObject;
}

const obj1 = {
    id_int: 1,
    phone_int: 8767878899,
    email_string: 'admin@admin.com',
    isadmin_boolean: true
}
const validatingObject = typeCheck(obj1)

validatingObject.phone_int = 234;

validatingObject.email_string = 'test@test.com';

validatingObject.isadmin_boolean = 'false';

console.log(validatingObject);
