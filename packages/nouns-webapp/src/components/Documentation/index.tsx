import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';
import { Trans } from '@lingui/macro';

const Documentation = () => {
  const moonbirdsDAO = (
    <Link text="Moonbirds DAO" url="https://www.moonbirds.xyz/" leavesPage={true} />
  );
  const playgroundLink = (
    <Link text={<Trans>Playground</Trans>} url="/playground" leavesPage={false} />
  );
  const publicDomainLink = (
    <Link
      text={<Trans>public domain</Trans>}
      url="https://creativecommons.org/publicdomain/zero/1.0/"
      leavesPage={true}
    />
  );
  const compoundGovLink = (
    <Link
      text={<Trans>Compound Governance</Trans>}
      url="https://compound.finance/governance"
      leavesPage={true}
    />
  );
  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>
            <Trans>WTF?</Trans>
          </h1>
          <p className={classes.aboutText}>
            <Trans>
              Lil Moonbirds are just like combination of Moonbirds and Nouns mechanics !
            </Trans>
            <br />
            <br />
            <Trans>
              An expansion DAO based on {moonbirdsDAO}, Lil Moonbirds DAO works to create a new
              layer within the Moonbirds ecosystem. By expanding the ecosystem, Lil Moonbirds DAO
              aims at exposing more people to Moonbirds.
            </Trans>
          </p>
          <p className={classes.aboutText} style={{ paddingBottom: '4rem' }}>
            <Trans>
              Learn more below, or start creating Lil Moonbirds off-chain using the {playgroundLink}
              .
            </Trans>
          </p>
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Summary</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <Trans>Lil Moonbirds artwork is in the {publicDomainLink}.</Trans>
                </li>
                <li>
                  <Trans>
                    One Lil Moonbirds is trustlessly auctioned every 30 minutes, forever.
                  </Trans>
                </li>
                <li>
                  <Trans>
                    100% of Lil Moonbirds auction proceeds are trustlessly sent to the treasury.
                  </Trans>
                </li>
                <li>
                  <Trans>Settlement of one auction kicks off the next.</Trans>
                </li>
                <li>
                  <Trans>All Lil Moonbirds are members of Lil Moonbirds DAO.</Trans>
                </li>
                <li>
                  <Trans>Lil Moonbirds DAO uses a fork of {compoundGovLink}.</Trans>
                </li>
                <li>
                  <Trans>Lil Moonbirds is equal to one vote.</Trans>
                </li>
                <li>
                  <Trans>
                    The treasury is controlled exclusively by Lil Moonbirds via governance.
                  </Trans>
                </li>
                <li>
                  <Trans>Artwork is generative and stored directly on-chain (not IPFS).</Trans>
                </li>
                <li>
                  <Trans>
                    No explicit rules exist for attribute scarcity; all Lil Moonbirds are equally
                    rare.
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Lil Birb receive rewards in the form of Lil Moonbirds (10% of supply for first 5
                    years).
                  </Trans>
                </li>
                <li>
                  <Trans>
                    Moonbirds DAO receive rewards in the form of Lil Moonbirds (10% of supply for
                    first 5 years).
                  </Trans>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>30 Minutes Auctions</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                <Trans>
                  The Lil Moonbirdss Auction Contract will act as a self-sufficient Lil Moonbirds
                  generation and distribution mechanism, auctioning one Lil Moonbirds every 30
                  minutes, forever. 100% of auction proceeds (ETH) are automatically deposited in
                  the Lil Moonbirdss DAO treasury, where they are governed by Lil Moonbirds owners.
                </Trans>
              </p>

              <p className={classes.aboutText}>
                <Trans>
                  Each time an auction is settled, the settlement transaction will also cause a new
                  Lil Moonbirds to be minted and a new 30 minutes auction to begin.{' '}
                </Trans>
              </p>
              <p>
                <Trans>
                  While settlement is most heavily incentivized for the winning bidder, it can be
                  triggered by anyone, allowing the system to trustlessly auction Lil Moonbirds as
                  long as Ethereum is operational and there are interested bidders.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Lil Moonbirds DAO</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <Trans>
                Lil Moonbirds DAO utilizes a fork of {compoundGovLink} and is the main governing
                body of the Lil Moonbirds ecosystem. The Lil Moonbirds DAO treasury receives 100% of
                ETH proceeds from daily Lil Moonbirds auctions. Each Lil Moonbirds is an irrevocable
                member of Lil Moonbirds DAO and entitled to one vote in all governance matters. Lil
                Moonbirds votes are non-transferable (if you sell your Lil Moonbirds the vote goes
                with it) but delegatable, which means you can assign your vote to someone else as
                long as you own your Lil Moonbirds.
              </Trans>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Governance ‘Slow Start’</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  In addition to the precautions taken by Compound Governance, Lil Birb have given
                  themselves a special veto right to ensure that no malicious proposals can be
                  passed while the Lil Moonbirds supply is low. This veto right will only be used if
                  an obviously harmful governance proposal has been passed, and is intended as a
                  last resort.
                </Trans>
              </p>
              <p>
                <Trans>
                  Lil Birb will proveably revoke this veto right when they deem it safe to do so.
                  This decision will be based on a healthy Lil Moonbirds distribution and a
                  community that is engaged in the governance process.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Moonbirds Traits</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  Lil Moonbirds are generated randomly based Ethereum block hashes. There are no
                  'if' statements or other rules governing Lil Moonbirds trait scarcity, which makes
                  all Lil Moonbirds equally rare. As of this writing, Lil Moonbirds are made up of:
                </Trans>
              </p>
              <ul>
                <li>
                  <Trans>backgrounds (2) </Trans>
                </li>
                <li>
                  <Trans>bodies (30)</Trans>
                </li>
                <li>
                  <Trans>accessories (137) </Trans>
                </li>
                <li>
                  <Trans>heads (234) </Trans>
                </li>
                <li>
                  <Trans>glasses (21)</Trans>
                </li>
              </ul>
              <Trans>
                You can experiment with off-chain Lil Moonbirds generation at the {playgroundLink}.
              </Trans>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>On-Chain Artwork</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  Lil Moonbirds are stored directly on Ethereum and do not utilize pointers to other
                  networks such as IPFS. This is possible because Lil Moonbird parts are compressed
                  and stored on-chain using a custom run-length encoding (RLE), which is a form of
                  lossless compression.
                </Trans>
              </p>

              <p>
                <Trans>
                  The compressed parts are efficiently converted into a single base64 encoded SVG
                  image on-chain. To accomplish this, each part is decoded into an intermediate
                  format before being converted into a series of SVG rects using batched, on-chain
                  string concatenation. Once the entire SVG has been generated, it is base64
                  encoded.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Lil Moonbirds Seeder Contract</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  The Lil Moonbirds Seeder contract is used to determine Lil Moonbirds traits during
                  the minting process. The seeder contract can be replaced to allow for future trait
                  generation algorithm upgrades. Additionally, it can be locked by the Lil Moonbirds
                  DAO to prevent any future updates. Currently, Lil Moonbirds traits are determined
                  using pseudo-random number generation:
                </Trans>
              </p>
              <code>keccak256(abi.encodePacked(blockhash(block.number - 1), nounId))</code>
              <br />
              <br />
              <p>
                <Trans>
                  Trait generation is not truly random. Traits can be predicted when minting a Lil
                  Moonbirds on the pending block.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Lil Birb's Reward</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  'Lil Bird' are the group of ten builders that initiated Lil Moonbirds. Here are
                  the Birb:
                </Trans>
              </p>
              <ul>
                <li>
                  <Link text="@yanzero_" url="https://twitter.com/yanzero_" leavesPage={true} />
                </li>
              </ul>
              <p>
                <Trans>
                  Because 100% of Lil Moonbirds auction proceeds are sent to Lil Moonbirds DAO, Lil
                  Birb have chosen to compensate themselves with Lil Moonbirds. Every 10th Lil
                  Moonbirds for the first 5 years of the project (Lil Moonbirds ids #0, #10, #20,
                  #30 and so on) will be automatically sent to the Lil Birb's multisig to be vested
                  and shared among the founding members of the project.
                </Trans>
              </p>
              <p>
                <Trans>
                  Lil Birb distributions don't interfere with the cadence of 30 minute auctions. Lil
                  Moonbirds are sent directly to the Lil Birb's Multisig, and auctions continue on
                  schedule with the next available Lil Moonbirds ID.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Moonbirds DAO's Reward
            </Accordion.Header>
            <Accordion.Body>
              <p>
                For being selfless stewards of cc0, Lil Birb have chosen to compensate the Moonbirds
                DAO with Lil Moonbirds. Every 11th Lil Moonbirds for the first 5 years of the
                project (Lil Moonbirds ids #1, #11, #21, #31 and so on) will be automatically sent
                to the Moonbirds DAO to be vested and shared among members of the project.
              </p>
              <p>
                Moonbirds DAO distributions don't interfere with the cadence of 30 minute auctions.
                Lil Moonbirds are sent directly to the Moonbirds DAO Treasury, and auctions continue
                on schedule with the next available Lil Moonbirds ID.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default Documentation;
