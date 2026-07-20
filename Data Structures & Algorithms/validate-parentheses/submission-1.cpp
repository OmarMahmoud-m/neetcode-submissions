class Solution {
public:
    bool isValid(string s) {
        stack<char>st;
    bool impossible = false;
    for(int i = 0;i < s.size();i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '[')
            st.push(s[i]);
        else{
            if(st.empty())
                impossible = true;
            else{
                if(s[i] == ')' && st.top() == '(')
                    st.pop();
                else if(s[i] == ']' && st.top() == '[')
                    st.pop();
                else if(s[i] == '}' && st.top() == '{')
                    st.pop();
                else
                    impossible = true;
            }
        }
    }
    if(!impossible && st.empty())
        return true;
    else
        return false;
    }
};
