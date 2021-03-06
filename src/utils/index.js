import dayjs from 'dayjs';

export const getAgeFromBirthDay = birthDay => {
    const today = dayjs(new Date());
    const afterBirthMonth = today.diff(dayjs(birthDay, 'YY-M-D H:i:s'), 'M');
    const age = Math.ceil(afterBirthMonth / 12);
    return age;
}

export const dynamicSort = (property, order) => {
    return (a, b) => {
        const result = (a[property] < b[property])
            ? -1
            : (a[property] > b[property]) ? 1 : 0;

        return result * order;
    }
}

export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  