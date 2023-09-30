import Image from 'next/image'
import styles from './page.module.css'

// Fixie.AI components
import { FloatingEmbed, InlineEmbed } from '@/components/fixie'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Generic Fixie.AI UI that can be embedded into your page (similar to an Intercom widget) */}
      <FloatingEmbed />

      <div className={styles.description}>
        <p>
          DEMO: Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <InlineEmbed width={600} height={600} />
      </div>

    </main>
  )
}
