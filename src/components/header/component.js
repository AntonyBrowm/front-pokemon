import React, { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../services/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import './styles.css';

export const Header=()=>{
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      {<div>No user found</div>}
    }
  };
  useEffect(() => {
    fetchUserName();
  }, []);
  return (
    <nav className="nav">
      <div className="profile"><AccountCircleIcon/>Bienvenido {name}</div>
      <ul>
         <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/pokemon-detail/noPokemon">Habilidades</CustomLink>
        <button onClick={logout}>
          Cerrar Sesiòn
        </button>
        <CustomLink to="/pokemon-detail">Modo Oscuro</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}