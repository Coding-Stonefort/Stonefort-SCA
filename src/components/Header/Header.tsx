"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Stonefort MENA" },
  {
    label: "Trading",
    children: [
      { href: "/product", label: "Product" },
      { href: "/Market", label: "Market" },
      { href: "/accounts", label: "Account" },
    ],
  },
  { href: "/platform", label: "Platform" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // hide-on-scroll
  const [hidden, setHidden] = useState(false);
  const [shadow, setShadow] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);

  const pathname = usePathname();
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  const closeMenu = () => setOpen(false);

  const isActiveLink = (href?: string) => {
    if (!href) return false;
    return pathname === href;
  };

  const isDropdownActive = (
    children?: { href: string; label: string }[]
  ) => {
    if (!children) return false;
    return children.some((child) => pathname === child.href);
  };

  // Close menu on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [pathname]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const getScrollY = () => {
    const y1 = window.scrollY || 0;
    const y2 = document.documentElement?.scrollTop || 0;
    const y3 = document.body?.scrollTop || 0;
    return Math.max(y1, y2, y3);
  };

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    lastYRef.current = getScrollY();

    const onScroll = () => {
      const y = getScrollY();

      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        setShadow(y > 8);

        const lastY = lastYRef.current;
        const goingDown = y > lastY;
        const delta = Math.abs(y - lastY);

        if (delta > 6) {
          if (y < 80) {
            setHidden(false);
          } else {
            setHidden(goingDown);
            if (goingDown) setOpen(false);
          }
        }

        lastYRef.current = y;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, {
      passive: true,
      capture: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll, true);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={[
          styles.header,
          hidden ? styles.headerHidden : "",
          shadow && !hidden ? styles.headerShadow : "",
        ].join(" ")}
      >
        <div className={styles.risk}>
          <div className={styles.container}>
            <p className={styles.riskText}>
              <strong>Risk Warning:</strong> Trading Contracts for Difference
              (CFDs) on margin involves a high level of risk and may not be
              suitable for all investors. You should ensure that you fully
              understand the risks involved before trading.
            </p>
          </div>
        </div>

        <div className={styles.top}>
          <div className={styles.containerTop}>
            <div className={styles.brand} aria-label="Stonefort Securities">
              <Link href="/" className={styles.logoLink} onClick={closeMenu}>
                <Image
                  src="/logo/Logos_SFS securities.webp"
                  alt="Stonefort Securities"
                  width={220}
                  height={60}
                  priority
                  className={styles.logo}
                />
              </Link>
            </div>

            <button
              type="button"
              className={styles.menuBtn}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-controls="primary-navigation"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={styles.menuIcon} aria-hidden="true" />
            </button>

            <nav className={styles.nav} aria-label="Primary navigation">
              {nav.map((item) =>
                item.children ? (
                  <div key={item.label} className={styles.dropdown}>
                    <button
                      type="button"
                      className={`${styles.linkBtn} ${
                        isDropdownActive(item.children) ? styles.activeLink : ""
                      }`}
                    >
                      {item.label}
                      <span className={styles.caret}></span>
                    </button>

                    <div className={styles.dropdownMenu}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`${styles.dropdownLink} ${
                            isActiveLink(child.href)
                              ? styles.activeDropdownLink
                              : ""
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.link} ${
                      isActiveLink(item.href) ? styles.activeLink : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className={styles.actions}>
              <Link href="https://sfs-muportal.com/#/login" className={styles.login}>
                Login
              </Link>
              <Link
                href="https://stonefortsecurities.com/registration/"
                className={styles.live}
              >
                Live Account
              </Link>
            </div>
          </div>
        </div>

        <div className={`${styles.drawerWrap} ${open ? styles.drawerOpen : ""}`}>
          <div className={styles.backdrop} onClick={closeMenu} aria-hidden="true" />

          <aside
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className={styles.drawerTop}>
              <span className={styles.drawerTitle}>Menu</span>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav
              id="primary-navigation"
              className={styles.drawerNav}
              aria-label="Primary navigation (mobile)"
            >
              {nav.map((item) =>
                item.children ? (
                  <div key={item.label} className={styles.drawerGroup}>
                    <div
                      className={`${styles.drawerParent} ${
                        isDropdownActive(item.children)
                          ? styles.activeDrawerParent
                          : ""
                      }`}
                    >
                      {item.label}
                    </div>

                    <div className={styles.drawerSubmenu}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`${styles.drawerSublink} ${
                            isActiveLink(child.href)
                              ? styles.activeDrawerLink
                              : ""
                          }`}
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.drawerLink} ${
                      isActiveLink(item.href)
                        ? styles.activeDrawerLinkBox
                        : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div className={styles.drawerActions}>
              <Link
                href="https://sfs-muportal.com/#/login"
                className={styles.drawerLogin}
                onClick={closeMenu}
              >
                Login
              </Link>
              <Link
                href="https://stonefortsecurities.com/registration/"
                className={styles.drawerLive}
                onClick={closeMenu}
              >
                Live Account
              </Link>
            </div>
          </aside>
        </div>
      </header>
    </>
  );
}