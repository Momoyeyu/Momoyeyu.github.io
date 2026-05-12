---
title: C++ Vector 详解
published: 2023-04-26
description: ''
tags: [C++]
category: C++
draft: false
image: '/img/cover3.jpg'
lang: 'zh_CN'
---

# Vector

## 简介

vector 是 C++ 标准库中的动态数组容器，功能类似其他语言的 ArrayList。它支持运行时动态扩容，并可随时查询当前元素数量。

## 基本用法

```cpp
#include<iostream>
#include<vector>

struct Vertex
{
    float x, y, z;

    Vertex(float x, float y, float z)
        : x(x), y(y), z(z)
    {}
};

// 重载 << 运算符，支持直接输出 Vertex
std::ostream& operator<<(std::ostream& stream, const Vertex vertex)
{
    stream << "(" << vertex.x << ", " << vertex.y << ", " << vertex.z << ")";
    return stream;
}

int main()
{
    std::vector<Vertex> vertices;

    vertices.push_back({ 1, 2, 3 });
    vertices.push_back({ 4, 5, 6 });

    // 下标遍历
    for (int i = 0; i < vertices.size(); i++)
        std::cout << vertices[i] << std::endl;

    vertices.erase(vertices.begin() + 1); // 删除索引 1 处的元素

    // 范围 for 遍历，使用引用避免拷贝
    for (Vertex& v : vertices)
        std::cout << v << std::endl;

    std::cin.get();
}
```

几个关键点：

1. 使用前需要 `#include<vector>`。
2. `push_back()` 在末尾追加元素；`erase()` 配合 `begin()` 加偏移量删除指定位置元素。
3. 与 Java 不同，C++ vector 的元素类型可以是基本类型（如 `int`），不必是对象。
4. 范围 for 循环中用引用（`&`）接收元素，避免不必要的拷贝。
5. 重载 `<<` 运算符可自定义类型的输出格式。
6. 初始化列表（initializer list）在构造函数中直接初始化成员，效率高于赋值。

## 性能优化

上面的示例展示了基本用法，但存在不必要的拷贝开销。下面针对拷贝问题进行优化。

### 减少拷贝

首先要明确拷贝发生在哪里。给 `Vertex` 添加拷贝构造函数并打印日志，可以直观看到拷贝次数：

```cpp
#include<iostream>
#include<vector>

struct Vertex
{
    float x, y, z;

    Vertex(float x, float y, float z)
        : x(x), y(y), z(z)
    {}

    Vertex(const Vertex& vertex)
        : x(vertex.x), y(vertex.y), z(vertex.z)
    {
        std::cout << "Copied!" << std::endl; // 每次拷贝时打印
    }
};

int main()
{
    std::vector<Vertex> vertices;
    vertices.push_back(Vertex(1, 2, 3));
    vertices.push_back(Vertex(4, 5, 6));
    vertices.push_back(Vertex(4, 5, 6));

    std::cin.get();
}
```

运行上面的代码，控制台会打印 6 次 "Copied!"。

#### 避免扩容引发的拷贝

vector 容量不足时会重新分配内存，将已有数据全部拷贝到新位置后再释放旧内存。每次 `push_back()` 触发扩容，就会产生额外拷贝。

用 `reserve()` 预先声明所需容量，可以避免扩容：

```cpp
std::vector<Vertex> vertices;

vertices.reserve(3); // 预分配 3 个元素的空间，避免扩容

vertices.push_back(Vertex(1, 2, 3));
vertices.push_back(Vertex(4, 5, 6));
vertices.push_back(Vertex(4, 5, 6));
```

加上 `reserve(3)` 后，控制台只打印 3 次 "Copied!"。

#### 避免构造时的额外拷贝

`push_back(Vertex(1, 2, 3))` 先在当前作用域构造一个临时对象，再将其拷贝进 vector。使用 `emplace_back()` 可以将参数直接传给 vector 内部的构造函数，省去这次拷贝：

```cpp
vertices.emplace_back(1, 2, 3);
vertices.emplace_back(4, 5, 6);
vertices.emplace_back(4, 5, 6);
```

同时使用 `reserve()` 和 `emplace_back()`，再次运行代码，控制台不会打印任何 "Copied!"。
