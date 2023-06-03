const formatPhone = (phone) => {

    let result = phone;

    result = result.replace(/\D/g, '');
    result = result.replace(/(^7)/g, '');

    const field1 = result.slice(0, 3);
    const field2 = result.slice(3, 6);
    const field3 = result.slice(6, 11);

    if(field1) {
      result = `+7(${field1}`;
    }

    if(field2) {
      result += `)-${field2}`;
    }

    if(field3) {
      result += `-${field3}`;
    }

    return result;
}

export default formatPhone;