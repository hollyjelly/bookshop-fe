import {styled} from "styled-components"
import logo from '../../assets/hero.png'
import {FaRegUser, FaSignInAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import type {Category} from "../../models/category.model.ts";
import {fetchCategory} from "../../api/category.api.ts";
import {useCategory} from "../../hooks/useCategory.ts";

// const CATEGORY = [
//     {
//         id: null,
//         name: "전체",
//     },
//     {
//         id: 0,
//         name: "동화",
//     },
//     {
//         id: 1,
//         name: "소설",
//     },
//     {
//         id: 2,
//         name: "사회",
//     }
// ]

export default function Header() {
    const {category} = useCategory();

    return (
        <HeaderStyle>
            <h1 className="logo">
                <Link to="/"><img src={logo} alt="vite"/></Link>
            </h1>
            <nav className="category">
                <ul>
                    {category.map((item, index) => (
                        <li key={index}>
                            <a href={item.category_id === null ? '/books' : `/books?category_id=${item.category_id}`}>
                                {item.category_name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="auth">
                <ul>
                    <li>
                        <a href="/login">
                            <FaSignInAlt/>
                            로그인</a>
                    </li>
                    <li>
                        <a href="/login">
                            <FaRegUser/>
                            회원가입</a>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    width: 100%;
  margin: 0 auto;
  max-width: ${({theme}) => theme.layout.width.large};
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.background};
  
  .logo {
    img {
      width: 200px;
    }
  }
  
  .category {
    ul {
      display: flex;
      gap: 32px;
      
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({theme}) => theme.colors.primary};
        }
      }
    }
  }
  
  .auth {
    ul {
      display: flex;
      gap: 16px;
      
      li {
        a {
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          color: ${({theme}) => theme.colors.text};
          
          &:hover {
            color: ${({theme}) => theme.colors.primary};
          }
        }
      }
    }
  }
`