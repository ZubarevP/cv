# Pavel Zubarev

## **My contact info**
> address:            *Kaliningrad, Russia*
> e-mail:             *zubarev.p@yahoo.com*
> GitHub:             *ZubarevP*
> telegram:           *zubarevp*
> discord(rs school): *Pavel Zubarev(@ZubarevP)*


## About myself
I am a graduate of the Moscow Psychological and Social University. My specialty is law. For twelve years I worked as a court representative. I want change my life and I will change it.

## Skills
C++ 
CMake
Git
OS: Windows, Linux

## Code example
```
#include <iostream>
#include <string>
#include <set>
#include <algorithm>
#include <cctype>

static const std::set<std::string> RESP {"yes", "y", "ok"};

bool IsPositive(std::string& resp) {
    std::transform(resp.begin(), resp.end(), resp.begin(),
        [](unsigned char c){return std::tolower(c);});    
    return RESP.count(resp)? true : false; 
}

int main() {
    std::cout << "Has Pavel Zubarev been hired?" << std::endl;
    while(true) {
        std::string resp;
        std::cin >> resp;
        if(IsPositive(resp)) {
            std::cout << "Congratulations! It's a great choice." << std::endl;
            break;
        } else {
            std::cout << "Wrong answer. Try again!" << std::endl;
        }
    }
    return 0;
}
```
## Experience
no experience

## Education
Coursera: C++ development basics (white belt) 
Coursera: C++ development basics (yellow belt) 
Coursera: C++ development basics (red belt) 

## Language
english level- A2
