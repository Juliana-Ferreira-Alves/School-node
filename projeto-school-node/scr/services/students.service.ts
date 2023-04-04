import { Student } from "../models/student.model";

class StundetsService {
    students: Array<Student> = [
        {
            name: 'Juliana Alves',
            email: 'analistajferreiraalves@gmail.com',
            document: '51938554744',
            password: '123456',
            age: 22,
            phone: '2196996969'
        },

        {
            name: 'Eduardo Alves',
            email: 'eduaazv@gmail.com',
            document: '12088739700',
            password: '123456',
            age: 23
        },

        {
            name: 'João Pedro Alves',
            email: 'jpalves@gmail.com',
            document: '11663459711',
            password: '123456',
            age: 21
        },

        {
            name: 'Beatriz Martins',
            email: 'biamartins@gmail.com',
            document: '40756964725',
            password: '123456',
            age: 21
        },

    ];

    getAll() {
        return this.students;
    }

    getByDocument(document: string) {
        const student = this.students.find((std) => std.document === document);
        return student;
    }

    create(student: Student) {
        this.students.push(student);
    }

    remove(document: string) {
        const studentIndex = this.students.findIndex((student) => student.document === document);

        if (studentIndex === -1) {
            throw new Error('Estudante não encontrado!');
        }
        this.students.splice(studentIndex, 1);
    }

    update(document: string, student: Student) {
        const studentIndex = this.students.findIndex((student) => student.document === document);
        if (studentIndex === -1) {
            throw new Error('Estudante não encontrado!');
        }
        this.students[studentIndex] = student;

    }
}

export default new StundetsService();