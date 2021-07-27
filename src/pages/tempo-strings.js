import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import Layout from '../components/layout';

const TempoStrings = () => {
  const data = useStaticQuery(
      graphql`
      query {
        allContentfulTempoString {
          edges {
            node {
              id
              tempoString
              title
              credit
            }
          }
        }
      }
    `,
  );
  return (
    <Layout title="Tempo">
      {data.allContentfulTempoString.edges.map((edge) => {
        return (
          <div key={edge.node.id}>
            <h2>{edge.node.title}</h2>
            <p>Click to hide:</p>
            <ul className="Checklist">
              {console.log(edge.node.tempoString)}
              {edge.node.tempoString.map((tempoString, index) => {
                return (
                  <li key={index} className="selected" onClick={(e) => toggleToCopy(e)}>{tempoString}</li>
                );
              })}
            </ul>
            <button onClick={() => copyToClipboard()}>Copy</button>
            <button onClick={() => staging()}>Staging</button>
            <button onClick={() => preview()}>Preview</button>
            <button onClick={() => selectNone()}>Select None</button>
            <button onClick={() => selectAll()}>Select All</button>
            <hr/>
            <sub>{edge.node.credit}</sub>
          </div>
        );
      })}
    </Layout>
  );
};

function staging() {
  document.querySelectorAll('.Checklist li').forEach((li) => {
    li.innerText = li.innerText.replace('preview', 'staging');
    if (li.innerText.indexOf('CMS changes on live') >= 0) {
      li.innerText = 'Tested CMS changes on live';
    }
  });
}

function preview() {
  document.querySelectorAll('.Checklist li').forEach((li) =>{
    li.innerText = li.innerText.replace('staging', 'preview');
    if (li.innerText.indexOf('Tested CMS changes on live') >= 0) {
      li.innerText = 'CMS changes on live';
    }
  });
}

function selectAll() {
  document.querySelectorAll('.Checklist li:not(.selected)').forEach((li) =>
    li.classList.add('selected'),
  );
}
function selectNone() {
  document.querySelectorAll('.Checklist li.selected').forEach((li) =>
    li.classList.remove('selected'),
  );
}

function toggleToCopy(e) {
  e.target.className == 'selected' ?
  e.target.classList.remove('selected') :
  e.target.classList.add('selected');
}

function copyToClipboard() {
  const textarea = document.createElement('textarea');
  textarea.textContent = '';

  const StringsToCopy = document.getElementsByClassName('selected');
  for (let i = 0; i < StringsToCopy.length; i++) {
    textarea.textContent += StringsToCopy[i].innerHTML+'. ';
    console.log(textarea.textContent);
  }

  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export default TempoStrings;
