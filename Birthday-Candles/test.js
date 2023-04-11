const birthdayCakeCandles = require("./index.js");

test("Should exist", () => {
  expect(birthdayCakeCandles).not.toBe(undefined);
});

test("Should pass The basic case", () => {
  expect(birthdayCakeCandles([4, 4, 1, 3])).toBe(2)
})

const arrays = [
    {
        "arr": [
            17,
            28,
            9,
            27,
            12
        ],
        "res": 1
    },
    {
        "arr": [
            4,
            28,
            19,
            15,
            21,
            4,
            13,
            4,
            26,
            15,
            8,
            2,
            14,
            15,
            28,
            2,
            7,
            28,
            14,
            12,
            10,
            10,
            24,
            25,
            19,
            13,
            15,
            26,
            26,
            30
        ],
        "res": 1
    },
    {
        "arr": [
            27,
            11,
            16,
            5,
            10,
            7,
            19,
            18,
            19,
            27,
            23,
            19,
            18,
            15,
            28,
            16,
            1,
            24,
            13,
            23,
            7,
            19,
            29,
            26,
            16,
            18,
            26,
            14
        ],
        "res": 1
    },
    {
        "arr": [
            23,
            3,
            14,
            8,
            14,
            20,
            27,
            6,
            3,
            21
        ],
        "res": 1
    },
    {
        "arr": [
            9,
            12,
            28,
            7,
            22,
            11,
            10,
            29,
            11,
            15,
            20,
            5,
            12,
            9,
            19,
            19,
            28,
            5,
            24,
            2,
            21,
            15
        ],
        "res": 1
    },
    {
        "arr": [
            2,
            16,
            26,
            29,
            18,
            12,
            19,
            13,
            30,
            23,
            24,
            18,
            11,
            6,
            26,
            19,
            3,
            23,
            17,
            16,
            21,
            19,
            12,
            3,
            5,
            16,
            21
        ],
        "res": 1
    },
    {
        "arr": [
            7,
            29,
            13,
            23,
            23,
            25,
            25,
            29,
            26,
            27,
            17,
            29,
            6,
            26,
            1,
            20,
            14,
            3,
            3,
            13,
            2,
            16,
            27,
            28,
            9,
            24,
            15,
            12,
            11
        ],
        "res": 3
    },
    {
        "arr": [
            30,
            3,
            23,
            9,
            6,
            14,
            18,
            21,
            29,
            5,
            19,
            10,
            19,
            7,
            7,
            28,
            12,
            26,
            15,
            10,
            20,
            4,
            28,
            19,
            8,
            3,
            28,
            9,
            10,
            16
        ],
        "res": 1
    },
    {
        "arr": [
            15,
            8,
            3,
            17,
            10,
            17,
            12,
            23,
            26,
            6,
            7,
            26,
            27,
            19,
            17,
            11,
            7,
            18,
            11,
            11
        ],
        "res": 1
    },
    {
        "arr": [
            27,
            1,
            10,
            29,
            12,
            9,
            28,
            12,
            6,
            28,
            15
        ],
        "res": 1
    },
    {
        "arr": [
            23
        ],
        "res": 1
    },
    {
        "arr": [
            13,
            16,
            28,
            1,
            23,
            15,
            12,
            12,
            15,
            29,
            29,
            17,
            15
        ],
        "res": 2
    },
    {
        "arr": [
            10,
            24,
            29,
            17,
            1,
            11,
            10,
            28,
            7,
            21,
            8,
            21,
            26,
            14,
            30,
            25,
            18,
            8,
            12,
            26,
            18,
            11,
            17,
            1,
            21,
            10,
            3,
            13
        ],
        "res": 1
    },
    {
        "arr": [
            21,
            5,
            3,
            14,
            16,
            15,
            12,
            8,
            9,
            26,
            16,
            4,
            2,
            30,
            3,
            29,
            20,
            28,
            7,
            19,
            2,
            20,
            9
        ],
        "res": 1
    },
    {
        "arr": [
            30
        ],
        "res": 1
    },
    {
        "arr": [
            29,
            23,
            1,
            13,
            30,
            23,
            17,
            13,
            1,
            2,
            30,
            4,
            18,
            21,
            9,
            5,
            20,
            15,
            15,
            11,
            28,
            2,
            8,
            2,
            16
        ],
        "res": 2
    },
    {
        "arr": [
            10,
            21,
            24,
            24,
            15,
            9,
            17,
            26,
            17,
            25,
            16,
            23,
            30,
            8,
            22,
            23,
            14,
            20,
            26,
            10,
            8
        ],
        "res": 1
    },
    {
        "arr": [
            29,
            28,
            18,
            2,
            3
        ],
        "res": 1
    },
    {
        "arr": [
            8,
            9,
            7,
            17,
            29,
            16,
            18,
            20,
            13,
            22,
            26,
            7,
            5,
            17,
            1
        ],
        "res": 1
    },
    {
        "arr": [
            14
        ],
        "res": 1
    },
    {
        "arr": [
            9,
            3,
            25,
            8,
            19,
            30,
            20,
            23,
            18,
            26,
            23
        ],
        "res": 1
    },
    {
        "arr": [
            12,
            28,
            25,
            13,
            24,
            17,
            30,
            7,
            29,
            27
        ],
        "res": 1
    },
    {
        "arr": [
            1,
            2,
            18,
            13,
            15,
            8,
            23,
            11,
            10,
            11,
            6,
            29,
            26,
            16,
            10,
            15,
            23,
            9,
            30,
            12,
            11,
            28,
            5,
            6,
            29
        ],
        "res": 1
    },
    {
        "arr": [
            17,
            2,
            17,
            12,
            30,
            28,
            4,
            4,
            17,
            18,
            22,
            3
        ],
        "res": 1
    },
    {
        "arr": [
            17,
            6,
            7,
            17,
            3,
            6,
            8,
            30,
            7,
            22,
            5,
            5,
            19,
            30,
            14,
            18,
            5,
            16,
            2,
            30,
            27,
            16,
            8,
            10,
            18
        ],
        "res": 3
    },
    {
        "arr": [
            20,
            15,
            2,
            6,
            14,
            4,
            22,
            16,
            10,
            12,
            15,
            16,
            24,
            1,
            20,
            4,
            10,
            7,
            11,
            30,
            29,
            11,
            21,
            30,
            2,
            29,
            12,
            26
        ],
        "res": 2
    },
    {
        "arr": [
            28,
            18,
            16,
            9,
            26,
            20,
            26,
            9,
            22,
            21,
            11,
            20,
            14,
            18,
            28,
            25,
            8,
            7,
            17,
            21,
            10,
            9,
            20,
            16,
            22
        ],
        "res": 2
    },
    {
        "arr": [
            2,
            16,
            12,
            21,
            3,
            30,
            7,
            17,
            15,
            17,
            17,
            22,
            13,
            15,
            27,
            26,
            18,
            25
        ],
        "res": 1
    },
    {
        "arr": [
            21,
            22,
            18,
            7,
            12,
            10,
            1,
            30,
            17,
            7,
            4,
            27,
            14,
            25,
            9,
            19,
            7,
            30,
            4,
            20,
            22,
            5,
            17,
            6,
            2,
            21,
            28,
            24
        ],
        "res": 2
    },
    {
        "arr": [
            3,
            6,
            27,
            18,
            13,
            12
        ],
        "res": 1
    },
    {
        "arr": [
            20,
            6,
            4,
            6
        ],
        "res": 1
    },
    {
        "arr": [
            5,
            11,
            15,
            2,
            11,
            21,
            28,
            14,
            27,
            18,
            2,
            3,
            22,
            26,
            2,
            28,
            13,
            12,
            12,
            23,
            20,
            1,
            14,
            19,
            16,
            22
        ],
        "res": 2
    },
    {
        "arr": [
            19,
            5,
            1,
            22,
            1,
            3,
            17,
            6,
            29,
            28,
            28,
            18,
            26,
            1,
            14,
            30,
            22,
            25,
            8,
            14,
            21,
            23
        ],
        "res": 1
    },
    {
        "arr": [
            28,
            24,
            20,
            15,
            30,
            19,
            17,
            3,
            6,
            27,
            12,
            19,
            3,
            7,
            2,
            11,
            26,
            7,
            18
        ],
        "res": 1
    },
    {
        "arr": [
            1,
            29,
            20,
            18,
            13,
            20,
            5,
            26,
            30,
            9,
            24,
            11,
            27,
            7,
            21,
            27,
            29,
            28,
            11,
            2,
            3,
            6,
            11,
            21,
            25,
            15,
            7,
            30,
            5
        ],
        "res": 2
    },
    {
        "arr": [
            5,
            18,
            29,
            27,
            20,
            24,
            29,
            18,
            5,
            10
        ],
        "res": 2
    },
    {
        "arr": [
            21,
            10,
            11,
            5,
            11,
            11,
            18,
            2,
            8,
            30,
            23,
            5,
            28,
            16,
            19,
            22,
            29,
            30,
            9,
            3,
            18,
            12,
            30,
            20,
            5,
            17,
            20,
            20,
            30
        ],
        "res": 4
    },
    {
        "arr": [
            22,
            27,
            29,
            6,
            15,
            20,
            27,
            21,
            2,
            16,
            21,
            6,
            10,
            3,
            16,
            21,
            28,
            17,
            29,
            14,
            16,
            1,
            3,
            20,
            7,
            30,
            15
        ],
        "res": 1
    },
    {
        "arr": [
            7,
            1,
            14,
            11,
            15,
            1,
            19,
            3,
            19,
            10,
            24
        ],
        "res": 1
    },
    {
        "arr": [
            25,
            12,
            13,
            21,
            3,
            26,
            14,
            30,
            5
        ],
        "res": 1
    },
    {
        "arr": [
            24,
            6,
            4,
            3,
            18,
            16,
            2,
            19,
            2,
            7,
            14,
            24,
            9,
            26,
            20,
            20,
            27,
            8,
            27,
            14,
            21,
            9,
            22,
            30,
            26,
            27,
            15,
            19,
            3,
            19
        ],
        "res": 1
    },
    {
        "arr": [
            27,
            8,
            23,
            25,
            2,
            1,
            10,
            8,
            8,
            8,
            1
        ],
        "res": 1
    },
    {
        "arr": [
            3,
            1
        ],
        "res": 1
    },
    {
        "arr": [
            26,
            7,
            23,
            28,
            5,
            9,
            11,
            28,
            18,
            1,
            2,
            4,
            15,
            27,
            1,
            4,
            5,
            12,
            17,
            22,
            15
        ],
        "res": 2
    },
    {
        "arr": [
            6,
            15,
            27,
            3,
            7,
            9,
            20,
            8,
            22,
            27,
            26,
            5,
            4,
            22,
            24,
            3,
            20,
            16,
            20,
            16
        ],
        "res": 2
    },
    {
        "arr": [
            27,
            19,
            6,
            4,
            27,
            9,
            10,
            17,
            10,
            29,
            16,
            6,
            23,
            9,
            8,
            1
        ],
        "res": 1
    },
    {
        "arr": [
            11,
            8,
            14,
            18,
            20,
            5,
            20,
            8,
            21,
            9,
            11,
            20,
            9,
            21,
            21,
            14,
            19,
            4
        ],
        "res": 3
    },
    {
        "arr": [
            27,
            5,
            18,
            28,
            4,
            17,
            6,
            13,
            5,
            22,
            18,
            12,
            12,
            21,
            22,
            12,
            2,
            6,
            9,
            12,
            29,
            23
        ],
        "res": 1
    },
    {
        "arr": [
            10,
            22,
            18,
            10,
            23,
            1,
            24,
            16,
            30,
            14,
            30,
            10,
            16,
            2,
            14,
            20,
            1,
            8,
            13,
            3,
            18,
            12,
            10,
            27,
            15,
            6,
            10,
            11
        ],
        "res": 2
    },
    {
        "arr": [
            29,
            2,
            21,
            1,
            28,
            30,
            25
        ],
        "res": 1
    },
    {
        "arr": [
            8,
            20,
            16,
            20,
            16,
            15
        ],
        "res": 2
    },
    {
        "arr": [
            8,
            14,
            17,
            3,
            30,
            19,
            3,
            13,
            29,
            22,
            4,
            15,
            4,
            24,
            1,
            29
        ],
        "res": 1
    },
    {
        "arr": [
            12,
            30,
            15,
            29,
            30,
            8,
            12,
            24,
            22,
            30,
            8,
            18,
            12,
            24
        ],
        "res": 3
    },
    {
        "arr": [
            13,
            26,
            12,
            30
        ],
        "res": 1
    },
    {
        "arr": [
            2,
            21,
            18,
            27,
            28,
            6,
            13,
            5,
            18
        ],
        "res": 1
    },
    {
        "arr": [
            26,
            1,
            17,
            10,
            18,
            12,
            4,
            10
        ],
        "res": 1
    },
    {
        "arr": [
            24,
            17,
            24,
            16,
            16,
            19,
            5
        ],
        "res": 2
    },
    {
        "arr": [
            7,
            2
        ],
        "res": 1
    },
    {
        "arr": [
            6,
            7
        ],
        "res": 1
    },
    {
        "arr": [
            25,
            29,
            16,
            29,
            14,
            25,
            2,
            11,
            27,
            21,
            18,
            20,
            3,
            25,
            12
        ],
        "res": 2
    },
    {
        "arr": [
            30,
            22,
            16,
            9,
            28,
            19,
            21,
            6,
            20,
            12,
            28,
            27,
            14,
            29,
            6,
            20,
            26,
            4
        ],
        "res": 1
    },
    {
        "arr": [
            12,
            10,
            11,
            14,
            24,
            12,
            26,
            6,
            21,
            24,
            27,
            19,
            19,
            2,
            1,
            2,
            3
        ],
        "res": 1
    },
    {
        "arr": [
            5,
            8,
            15,
            27,
            4,
            23,
            15,
            9,
            17,
            10,
            12,
            2,
            5,
            24,
            9,
            3,
            21,
            10,
            3,
            27,
            3,
            15,
            28,
            4,
            17,
            9,
            8,
            8
        ],
        "res": 1
    },
    {
        "arr": [
            30,
            3,
            19,
            26,
            23,
            15,
            20
        ],
        "res": 1
    },
    {
        "arr": [
            23,
            17,
            15,
            30,
            8,
            30,
            12,
            12
        ],
        "res": 2
    },
    {
        "arr": [
            26,
            30,
            19,
            28,
            11,
            12,
            24,
            1,
            5,
            6,
            29,
            29,
            17,
            8,
            29,
            26,
            13,
            3,
            3
        ],
        "res": 1
    },
    {
        "arr": [
            2,
            22
        ],
        "res": 1
    },
    {
        "arr": [
            21,
            27,
            24,
            1,
            24,
            5,
            29,
            8,
            6,
            11,
            10
        ],
        "res": 1
    },
    {
        "arr": [
            27,
            28
        ],
        "res": 1
    },
    {
        "arr": [
            1,
            22,
            18,
            10,
            27,
            11,
            5,
            12
        ],
        "res": 1
    },
    {
        "arr": [
            9,
            2,
            24,
            13,
            30,
            30,
            19
        ],
        "res": 2
    },
    {
        "arr": [
            27,
            2,
            6,
            1,
            28,
            19,
            7,
            27,
            15,
            9,
            12,
            24,
            1,
            25,
            20,
            12,
            26,
            9,
            6
        ],
        "res": 1
    },
    {
        "arr": [
            19,
            3,
            9,
            5,
            28,
            20
        ],
        "res": 1
    },
    {
        "arr": [
            28,
            29,
            9,
            12,
            14,
            6,
            25,
            4,
            16,
            20,
            9,
            6,
            27,
            12,
            22,
            10,
            16,
            20,
            17,
            16,
            22,
            11
        ],
        "res": 1
    },
    {
        "arr": [
            7
        ],
        "res": 1
    },
    {
        "arr": [
            16,
            29,
            26,
            30,
            13,
            16,
            25,
            16,
            26,
            6,
            7,
            27,
            17,
            1,
            21,
            28,
            26,
            30,
            14,
            24,
            5,
            21,
            24,
            23
        ],
        "res": 2
    },
    {
        "arr": [
            28,
            28,
            3,
            26,
            16,
            9,
            20,
            24,
            17,
            4,
            21,
            27,
            1,
            21,
            23,
            16,
            14,
            29,
            5,
            22,
            7,
            15,
            5,
            2,
            28,
            10,
            8
        ],
        "res": 1
    },
    {
        "arr": [
            14,
            27,
            25,
            10,
            12,
            2,
            13,
            4,
            17,
            13,
            13,
            26,
            28,
            15,
            20,
            27,
            14,
            20,
            12,
            8,
            24,
            16
        ],
        "res": 1
    },
    {
        "arr": [
            5,
            10,
            2,
            5,
            18,
            20,
            2,
            29,
            21,
            22,
            18,
            23,
            13
        ],
        "res": 1
    },
    {
        "arr": [
            2,
            26,
            1,
            20,
            7,
            29,
            7,
            15,
            1,
            27,
            18,
            18,
            14,
            21,
            8,
            27,
            3,
            16
        ],
        "res": 1
    },
    {
        "arr": [
            5,
            1,
            20,
            23,
            12,
            18,
            19,
            21,
            24,
            30,
            20,
            10,
            13,
            6,
            10,
            15,
            12,
            3,
            12,
            2,
            26,
            21,
            20,
            28
        ],
        "res": 1
    },
    {
        "arr": [
            7,
            23,
            18,
            8,
            3,
            20,
            16,
            3,
            24
        ],
        "res": 1
    },
    {
        "arr": [
            25,
            24,
            12,
            26,
            28,
            23,
            20,
            5,
            14,
            16,
            4,
            30
        ],
        "res": 1
    },
    {
        "arr": [
            19,
            5,
            22,
            7,
            30,
            20,
            12,
            30,
            10,
            1,
            2,
            4,
            14,
            7,
            17
        ],
        "res": 2
    },
    {
        "arr": [
            30,
            22,
            9,
            5,
            6,
            22,
            21,
            2,
            11,
            23,
            7,
            26,
            21,
            12,
            11,
            17,
            16,
            12,
            19,
            11,
            8,
            5,
            9,
            8
        ],
        "res": 1
    },
    {
        "arr": [
            12,
            21,
            9,
            15,
            13,
            18,
            1,
            20,
            6,
            19,
            16,
            30
        ],
        "res": 1
    },
    {
        "arr": [
            3,
            20,
            5,
            30,
            24,
            18,
            2,
            24,
            15,
            17,
            18,
            15,
            4,
            1,
            16,
            17,
            14,
            4
        ],
        "res": 1
    },
    {
        "arr": [
            14,
            20
        ],
        "res": 1
    },
    {
        "arr": [
            11,
            18,
            23,
            26
        ],
        "res": 1
    },
    {
        "arr": [
            24,
            11,
            30,
            18,
            17,
            18,
            5,
            6,
            22,
            11,
            27,
            7,
            8,
            14,
            30,
            30,
            28,
            26
        ],
        "res": 3
    },
    {
        "arr": [
            25,
            11,
            19,
            9,
            14,
            19,
            16,
            22,
            8,
            23,
            5,
            24,
            7,
            14,
            28,
            4,
            21,
            30
        ],
        "res": 1
    },
    {
        "arr": [
            19,
            5,
            11,
            5,
            1,
            26,
            2,
            7,
            6,
            27,
            16,
            25
        ],
        "res": 1
    },
    {
        "arr": [
            11,
            23,
            26,
            21,
            6,
            6,
            27,
            6,
            5,
            22,
            17,
            7
        ],
        "res": 1
    },
    {
        "arr": [
            24,
            17,
            19,
            30,
            14,
            5,
            10,
            14,
            30,
            21,
            22,
            9,
            14,
            1,
            25,
            25
        ],
        "res": 2
    },
    {
        "arr": [
            4,
            9,
            18,
            4,
            6,
            25,
            22,
            14,
            11,
            1,
            21,
            7,
            19,
            29,
            23,
            27,
            11,
            21
        ],
        "res": 1
    },
    {
        "arr": [
            9,
            25,
            16,
            22,
            19,
            23,
            1,
            1,
            13,
            1,
            28,
            30,
            5,
            15,
            30,
            14,
            17,
            26,
            25,
            30,
            1,
            17,
            28,
            27,
            13,
            6
        ],
        "res": 3
    },
    {
        "arr": [
            29,
            26,
            15,
            11,
            16,
            29,
            30,
            9,
            15,
            8
        ],
        "res": 1
    },
    {
        "arr": [
            30,
            23,
            23,
            13,
            3,
            11,
            22,
            24,
            13,
            30,
            1,
            28,
            20,
            1,
            6,
            6,
            5,
            23
        ],
        "res": 2
    },
    {
        "arr": [
            27,
            16,
            15,
            22,
            12,
            16,
            27,
            8,
            25,
            18,
            30,
            24,
            16,
            12,
            20,
            8,
            2,
            14,
            19,
            7,
            27,
            26,
            27,
            29,
            30,
            7,
            24,
            17,
            20,
            22
        ],
        "res": 2
    },
    {
        "arr": [
            24,
            8,
            24,
            4,
            22,
            25,
            3,
            5,
            26,
            1,
            27,
            20,
            8,
            2,
            17
        ],
        "res": 1
    }
]

arrays.forEach(({arr, res}) => test("Should get the right response for =" + JSON.stringify(arr), () => {
  expect(birthdayCakeCandles(arr)).toBe(res)
}))